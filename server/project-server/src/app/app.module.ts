import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { FirebaseModule } from './database/firebase.module';

@Module({
  imports: [DatabaseModule,FirebaseModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
     