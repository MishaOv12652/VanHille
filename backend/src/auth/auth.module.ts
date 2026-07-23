import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './presentation/auth.controller';
import { AuthService } from './application/auth.service';
import { SITE_USER_REPOSITORY } from './domain/site-user-repository.interface';
import { PASSWORD_HASHER } from './domain/password-hasher.interface';
import { SiteUserMongooseRepository } from './infrastructure/site-user.mongoose-repository';
import { BcryptPasswordHasher } from './infrastructure/bcrypt-password-hasher';
import { JwtStrategy } from './infrastructure/jwt.strategy';
import {
  SiteUserDocument,
  SiteUserSchema,
} from './infrastructure/mongoose/site-user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SiteUserDocument.name, schema: SiteUserSchema },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.getOrThrow<string>('JWT_SECRET'),
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    { provide: SITE_USER_REPOSITORY, useClass: SiteUserMongooseRepository },
    { provide: PASSWORD_HASHER, useClass: BcryptPasswordHasher },
  ],
})
export class AuthModule {}
