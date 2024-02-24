import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('account')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/get')
  getData() {
    return this.appService.getData();
  }
  @Get('/getUserData')
  getUserData() {
    return this.appService.getUserData();
  }
}
