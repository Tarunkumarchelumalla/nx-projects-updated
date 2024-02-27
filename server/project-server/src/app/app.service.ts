import {  Injectable } from '@nestjs/common';
import { FirebaseRepository } from './database/firebase.reposetory';



@Injectable()
export class AppService {
    constructor(private firebaseRepository: FirebaseRepository) {}
  

    async GetTestData(){

        const result =await this.firebaseRepository.collection.doc('W1z1RiDwHbj8ZMKBHHDY')
       const priority =  await result.collection('Task-Priority').get()
       const priorityList = priority.docs.map((v) => v.data());
        return{
            priorityList
        }
    }

}
