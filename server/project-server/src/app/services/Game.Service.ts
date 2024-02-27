import { Injectable } from '@nestjs/common';
import { Int_Games } from '../models/masters/Games';
import { GameTable } from '../database/tables/masters/Games';
import { Int_UserLinkGameTable } from '../models/Users';

@Injectable()
export class GameService {

    async InsertGameData(bodyData:Int_Games){

       const result = await GameTable.create({...bodyData},{fields:[
        'Description',
        'GameAuthUrl',
        'PosterSize',
        'PosterType',
        'PosterUrl',
        'GameName'
        ]})

        return{
            result
        }

    }

}
