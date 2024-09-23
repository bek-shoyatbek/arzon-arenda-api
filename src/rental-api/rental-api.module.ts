import { Module } from '@nestjs/common';
import { RentalApiService } from './rental-api.service';
import { RentalApiController } from './rental-api.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RentalApiController],
  providers: [RentalApiService,PrismaService],
})
export class RentalApiModule {}
