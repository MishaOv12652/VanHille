import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../application/auth.service';

interface JwtPayload {
  user: { _id: string };
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      // Frontend replays the header verbatim as `'JWT ' + token`
      // (auth.service.ts) — must extract with the same scheme, not the
      // Bearer default (see migration plan).
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
      secretOrKey: configService.getOrThrow<string>('JWT_SECRET'),
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.authService.findById(payload.user._id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
