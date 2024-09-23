import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as morgan from 'morgan';
import { PrismaClientExceptionFilter } from './prisma/prisma.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Rental API')
    .setDescription('The Rental API description')
    .setVersion('1.0')
    .addTag('homes')
    .addTag('rentals')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

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
