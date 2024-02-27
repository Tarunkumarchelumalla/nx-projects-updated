import { Sequelize } from 'sequelize-typescript';
import { AuthToken } from './tables/account/AuthToken';
import { UserTable } from './tables/users/UserTable';
import { PostsTable } from './tables/posts/Posts';
import { CommentsTable } from './tables/comments/Comments';
import { GameTable } from './tables/masters/Games';
import { RankingsTable } from './tables/masters/Rankings';
import { UserLinkGameTable } from './tables/users/UserLinkGameTable';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { UserAssociations } from './associations/UserAssociations';

const Models = [AuthToken,UserTable,PostsTable,CommentsTable,GameTable,RankingsTable,UserLinkGameTable]

export const databaseProviders = [
    {
      provide: 'SEQUELIZE',
      useFactory: async () => {
        const sequelize = new Sequelize({
          dialect: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'root',
          database: 'test',
        });
        const isAlter=false
        sequelize.addModels([...Models]);
        if(!isAlter){
          new UserAssociations()
        }
        if(isAlter){
        await sequelize.sync({alter:true});
        }
        return sequelize;
      },

    },
    // {
    //   provide: 'FIREBASE_APP',
    //   inject: [ConfigService],
    //   useFactory: () => {
    //     const firebaseConfig = {
    //       type: "service_account",
    //       project_id: "mobioffice-dev",
    //       private_key_id: "79c2b3a6c408f76171d66da0f3a3cee80d936df9",
    //       private_key:
    //         "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCiOw7XTnctRBR\nlG5nosKFzs4DYT3MogNxsZJLCOOxgaFCjVAwLRQTX/e5dJNMw1YxMlpC5/mC+cjd\ntQOpdbqwyMhVi5q4iCisatDb6Rhol/IVL6GEAxzC3FPwBgjxSuj7yftDHbPc8SEa\nXboCbBgNEGiTgr3pJyc2kiqYWriHSvnWmBBYV1zh0S1LMhdNcK40VgbwRvHoPm6N\n/WdCizQ4P9iWL/YEeOBDfxEJ7ytEFmtEutSMVOVOBovfbEyqKSUrjtmUvOOIyfRA\nPBOZlnKSlxbGYXjg0dBGY5al7D+rmCvcGZHUwyJgHRhXce/CY/bqN+B9p86li5c1\nEanLuc9RAgMBAAECggEAGDtdDcH9mKf3Oeo+3GryRx+tGs+sloZh3nIrkmwvjKdk\nknku0Wl0FDvCjFfgl1HHtUYb5zSlKHL72d4X8C5pjGbeSYWjxrOzOVLu5E3DTBgN\nQCVYPazzkrRGQmJGD+RwZBjTUxdqla11naaqKm4TiuEN3b4N8PJ/GHWZl7PJQ5TU\nJg9DYglIPKTKfnsrFzE1FqYVWgDoXyZelqgf86lA/LtRZgiWPtsOxU/TZflRrr3w\n+uDUUb7DJ2Dzlpno+8wYnaZK5yscK/5bUYowGk1SKysQUPMbxGP9wV61QDdx0D5k\nsb6amYOPXety3jl8gb4SKv58RGa9+tHTQia4mt6BNwKBgQDpdkVS8kjWBFBYaFkh\nAb7FoUZtMEsn5EBDU3qGTj6PUUejl7Z01bqo7yuE+eaLoopHPVzYeZwjpCUlGBSn\nqZCV71ofOoYjkwibxUAkwnQ0vSsJMTvkyi+T5VtWqTQmbCVpeVvYE+Bd9lYUcGLB\nRxOVZxzEiCjx4JSjsJNp0lgfAwKBgQDVUJ10ZqW7WNZ0Cmrns9BBW0iMd3UfE0nc\nvGTZVzscGT6Kl+ZD0IvlgH4cShaW0TWZLSUn4SPx777INbHwvmT1+b5EbX/SUUag\nsB81Hc3K2xtBv3/mzE34KWL71J7Sfu2kUt0zB/TJamUKV2hoGMwEV5sj5XiEEXim\naAEKaPQuGwKBgDZ07xC9ET5SvUcR+BBZ7tz8lIftpupENLU/qKnhYHhftj0zq0yv\neh3jxBv9ishxfp3Fc33PSBuMM1nmtxKw29gNf9Ee/qEXr/9d0GuCrEaNBZfcUyM4\nAkcWTer2BwMbYNKsiz7ozAI+7q9P08lPwgKsjapONHbPMvzHuGsLtKBvAoGAer6j\ni8pRDWfGJwmjkGYwrJrpOSK3+0SvGNwzL7j5I2cHTNqxPk5vYYU5i++55djGfbiz\ni6oKc/nfjvcOyBfWoo+tw1Q62/u2p1oQ6xCWTWcc3Q1jfJwNNYIjGgOzzC4LcqXX\n8LhgS9H0CCpZwqSaKNl8RQCTA3PGOALarnHMKAcCgYEA2jNwd9KuAnnbpmOHhbVP\n8Q92NnBU3jrnivo2Mbh3lpVeHs38mPToTjZo7B1NNw84GdSnNHzoQyYmC9mqe1YF\nxDxarCoRYDOgckhRDxABR/gFvRqeMN/tEsP7CMZId6BAN0kypiyfaFQcjFs1wUBr\ndqRqWB2Ik5tQM0oYJsQotyc=\n-----END PRIVATE KEY-----\n",
    //       client_email:
    //         "firebase-adminsdk-lzsmv@mobioffice-dev.iam.gserviceaccount.com",
    //       client_id: "114290518855712527331",
    //       auth_uri: "https://accounts.google.com/o/oauth2/auth",
    //       token_uri: "https://oauth2.googleapis.com/token",
    //       auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    //       client_x509_cert_url:
    //         "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lzsmv%40mobioffice-dev.iam.gserviceaccount.com",
    //     }as admin.ServiceAccount;
    
    //     return admin.initializeApp({
    //       credential: admin.credential.cert(firebaseConfig),
    //       databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`,
    //       storageBucket: `${firebaseConfig.projectId}.appspot.com`,
    //     });
    //   },
    // }
]
