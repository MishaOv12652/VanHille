import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SiteUser } from '../domain/site-user.entity';
import {
  ISiteUserRepository,
  SITE_USER_REPOSITORY,
} from '../domain/site-user-repository.interface';
import {
  IPasswordHasher,
  PASSWORD_HASHER,
} from '../domain/password-hasher.interface';

// Legacy `expiresIn: 60480` is seconds (~16.8h), despite the old code's
// `//1 week` comment — ported as the literal number (see migration plan).
const TOKEN_EXPIRES_IN_SECONDS = 60480;

export interface AuthResult {
  token: string;
  siteUser: { id: string; username: string; email: string };
}

@Injectable()
export class AuthService {
  constructor(
    @Inject(SITE_USER_REPOSITORY)
    private readonly siteUserRepository: ISiteUserRepository,
    @Inject(PASSWORD_HASHER)
    private readonly passwordHasher: IPasswordHasher,
    private readonly jwtService: JwtService,
  ) {}

  async register(
    email: string,
    username: string,
    password: string,
  ): Promise<void> {
    const hashed = await this.passwordHasher.hash(password);
    await this.siteUserRepository.create({ email, username, password: hashed });
  }

  async authenticate(username: string, password: string): Promise<AuthResult> {
    const user = await this.siteUserRepository.findByUsername(username);
    if (!user) {
      throw new Error('משתמש לא קיים');
    }

    const isMatch = await this.passwordHasher.compare(password, user.password);
    if (!isMatch) {
      throw new Error('סיסמא לא נכונה אנא נסה שנית!');
    }

    // NB: the legacy JWT payload embedded the full user document
    // (including the bcrypt hash) as `{user}`. Nothing decodes the token
    // client-side, so this payload deliberately omits the password hash —
    // a harmless hardening with no observable behavior change.
    const token = this.jwtService.sign(
      { user: { _id: user._id!, username: user.username, email: user.email } },
      { expiresIn: TOKEN_EXPIRES_IN_SECONDS },
    );

    return {
      token: 'JWT ' + token,
      siteUser: { id: user._id!, username: user.username, email: user.email },
    };
  }

  findById(id: string): Promise<SiteUser | null> {
    return this.siteUserRepository.findById(id);
  }
}
