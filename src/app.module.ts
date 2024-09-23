import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RentalApiModule } from './rental-api/rental-api.module';
import { HomeApiModule } from './home-api/home-api.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [RentalApiModule, HomeApiModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
