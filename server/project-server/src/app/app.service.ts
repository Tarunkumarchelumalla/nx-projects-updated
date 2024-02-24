import { Injectable } from '@nestjs/common';
import { AuthToken } from './database/tables/account/AuthToken';
import { UserTable } from './database/tables/users/UserTable';

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

  getUserData() {
    return UserTable.create({
      Name:'mouseTable',
      Games:['helo'],
      Profile:'ghsdvahgdv',
      ProfileType:'helo',
      Score:500,
      createdBy:20215,
      createdAt: new Date(),

    },{
      fields: [
       'Name',
        'Games',
        'ProfileType',
        'Profile',
        'Score',
        'createdAt',
        'createdBy'
      ],
    })
  }

  

}
