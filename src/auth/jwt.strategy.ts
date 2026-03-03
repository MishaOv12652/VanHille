import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { SiteUser, SiteUserDocument } from './schemas/site-user.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    @InjectModel(SiteUser.name) private siteUserModel: Model<SiteUserDocument>,
  ) {
    super({
      // Frontend sends "Authorization: JWT <token>" — matches original passport.js behaviour
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
      secretOrKey: configService.getOrThrow<string>('JWT_SECRET'),
      ignoreExpiration: false,
    });
  }

  async validate(payload: { user: { _id: string } }) {
    const user = await this.siteUserModel.findById(payload.user._id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
