import { Injectable } from '@nestjs/common';
import { AuthToken } from './database/tables/account/AuthToken';

@Injectable()
export class AppService {

  getData() {
    return AuthToken.create({
      ID:2123,
      createdBy:454645,
      createdAt:new Date(),
      Token:'sbdahdgvasghvdjahdsva',
      UID:78
    },{
      fields: [
       'ID',
       'createdBy',
       'createdAt',
       'Token',
       'UID' 
      ],
    })
  }
}
