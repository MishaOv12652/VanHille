import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CloudLinksModule } from './cloud-links/cloud-links.module';
import { StudentsModule } from './students/students.module';
import { QuizModule } from './quiz/quiz.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.getOrThrow<string>('MONGODB_URI'),
      }),
    }),
    CloudLinksModule,
    StudentsModule,
    QuizModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'public'),
      exclude: [
        '/VHS{/*splat}',
        '/VanHilleQuiz{/*splat}',
        '/User{/*splat}',
        '/CloudLinks{/*splat}',
      ],
    }),
  ],
})
export class AppModule {}
