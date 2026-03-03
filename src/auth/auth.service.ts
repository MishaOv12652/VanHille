import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { SiteUser, SiteUserDocument } from './schemas/site-user.schema';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(SiteUser.name) private siteUserModel: Model<SiteUserDocument>,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto): Promise<{ success: boolean; msg: string }> {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(dto.password, salt);
    try {
      await this.siteUserModel.create({
        email: dto.email,
        username: dto.username,
        password: hash,
      });
      return { success: true, msg: 'משתמש נרשם' };
    } catch (err) {
      return { success: false, msg: String(err) };
    }
  }

  async login(dto: LoginDto) {
    const user = await this.siteUserModel.findOne({ username: dto.username });
    if (!user) {
      return { success: false, msg: 'משתמש לא קיים' };
    }

    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) {
      return { success: false, msg: 'סיסמא לא נכונה אנא נסה שנית!' };
    }

    // Preserve original token format: payload is {user: <full doc>}
    const token = this.jwtService.sign({ user });
    return {
      success: true,
      token: 'JWT ' + token,
      siteUser: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    };
  }

  getProfile(user: SiteUserDocument) {
    return { user };
  }
}
