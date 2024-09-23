import { Module } from '@nestjs/common';
import { HomeApiService } from './home-api.service';
import { HomeApiController } from './home-api.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [HomeApiController],
  providers: [HomeApiService, PrismaService],
})
export class HomeApiModule { }
