import { Inject, Injectable } from '@nestjs/common';
import { Int_UserLinkGameTable, Int_UserTable } from '../models/Users';
import { UserTable } from '../database/tables/users/UserTable';
import { UserLinkGameTable } from '../database/tables/users/UserLinkGameTable';
import { app } from 'firebase-admin';
import { literal } from 'sequelize';
@Injectable()
export class UserService {
    #db: FirebaseFirestore.Firestore;
  #collection: FirebaseFirestore.CollectionReference;

  constructor(@Inject('FIREBASE_APP') private firebaseApp: app.App) {
    this.#db = firebaseApp.firestore();
    this.#collection = this.#db.collection('Incoming');
  }
    
    async InsertUserData(bodyData:Int_UserTable){

       const result = await UserTable.create({...bodyData},{fields:[
            'Email',
            'GridScore',
            'Name',
            'Password',
            'Profile',
            'ProfileType',
            'Token',
        ]})

        return{
            result
        }

    }

    async InsertUserLinkGameData(bodyData:Int_UserLinkGameTable){

        const result = await UserLinkGameTable.create({...bodyData},{fields:[
            'GID',
            'UID'
        ]})

        return{
            result
        }

    }

    async GetTestData(UID:string){

        const result = await UserTable.findOne({

            where:{
                UID:UID
            },
            include:[{
                model:UserLinkGameTable,
                as:'games',
                attributes:{
                    include:[
                        [literal(`"games->sourceGameData"."Name"`),"Name"]
                    ]
                }
            }
            ]
        })

        return {
            result
        }

    }
}
