import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  if (process.env.NODE_ENV === 'production') {
    app.use((req: any, res: any, next: any) => {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
      }
      next();
    });
  }

  const port = process.env.PORT || 3050;
  await app.listen(port);
  console.log('server started on port: ' + port);
}
bootstrap();
