import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { PrismaClientExceptionFilter } from './prisma/prisma.exception-filter';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  app.enableCors({
    origin: "*",
  });


  app.use(morgan('dev'));
  app.useGlobalFilters(new PrismaClientExceptionFilter());
  app.useStaticAssets(join(process.cwd(), 'public'), {
    prefix: '/public/',
  });

  const port = configService.get('PORT') || 3333;
  await app.listen(port);

  console.log(`Application is running on: ${await app.getUrl()}`);
}


bootstrap();
