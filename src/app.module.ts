import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AuthModule } from './auth/auth.module';
import { StudentsModule } from './students/students.module';
import { QuizModule } from './quiz/quiz.module';
import { CloudlinksModule } from './cloudlinks/cloudlinks.module';
import { LiteratureModule } from './literature/literature.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AuthModule,
    StudentsModule,
    QuizModule,
    CloudlinksModule,
    LiteratureModule,
  ],
})
export class AppModule {}
