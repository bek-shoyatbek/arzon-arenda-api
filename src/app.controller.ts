import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("hello")
  @ApiOperation({ summary: 'Get hello' })
  @ApiResponse({ status: 200, description: "Hello World!" })
  getHello(): string {
    return this.appService.getHello();
  }
}
