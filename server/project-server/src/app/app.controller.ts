import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('account')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/GetTestData')
  getData() {
    return this.appService.GetTestData();

}
}
