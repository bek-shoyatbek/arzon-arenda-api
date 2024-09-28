import { Module } from '@nestjs/common';
import { HomeApiService } from './home-api.service';
import { HomeApiController } from './home-api.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [MulterModule.register({
    dest: process.cwd() + 'public',
  })],
  controllers: [HomeApiController],
  providers: [HomeApiService, PrismaService],
})
export class HomeApiModule { }
