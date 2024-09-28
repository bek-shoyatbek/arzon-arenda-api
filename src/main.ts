import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { PrismaClientExceptionFilter } from './prisma/prisma.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  app.enableCors({
    origin: "*",
  });

  app.use(morgan('dev'));
  app.useGlobalFilters(new PrismaClientExceptionFilter());

  const port = configService.get('PORT') || 3333;
  await app.listen(port);

  console.log(`Application is running on: ${await app.getUrl()}`);
}


bootstrap();
