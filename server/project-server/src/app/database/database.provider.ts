import { Sequelize } from 'sequelize-typescript';
import { AuthToken } from './tables/account/AuthToken';

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
        sequelize.addModels([AuthToken]);
        await sequelize.sync();
        return sequelize;
      },
    }
]
