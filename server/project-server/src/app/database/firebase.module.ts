import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { FirebaseRepository } from './firebase.reposetory';

const firebaseProvider = {
  provide: 'FIREBASE_APP',
  inject: [ConfigService],

};

@Module({
    imports: [ConfigModule],
    providers: [firebaseProvider, FirebaseRepository],
    exports: [FirebaseRepository],
})
export class FirebaseModule {}