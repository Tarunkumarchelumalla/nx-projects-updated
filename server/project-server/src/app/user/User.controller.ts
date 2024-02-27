import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Int_UserTable } from '../models/Users';
import { UserService } from '../services/User.Service';

@Controller('user')
export class UserController {
  constructor(private userService:UserService ) {}

  @Post('/InsertUserData')
  postData(@Body() bodyData:Int_UserTable) {
    return this.userService.InsertUserData(bodyData) ;
}
  @Get('/GetTestData')
  getFbData(@Query() queryData:any) {
    const {UID}= queryData
    return this.userService.GetTestData(UID) ;
}


}
