import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeApiModule } from './home-api/home-api.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [HomeApiModule, ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: 'uploads',
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
