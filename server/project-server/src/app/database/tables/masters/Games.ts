import { Column, DataType, Table } from "sequelize-typescript";
import { TABLE_INDEX, TABLE_NAMES } from "../../constant";
import { DB_CONFIG } from "../../../environment/environment";
import { Int_Games } from "../../../models/masters/Games";
import { Model } from "sequelize";

@Table({
    tableName: TABLE_NAMES.MASTER_GAMES_TABLE,
    schema: DB_CONFIG.DATABASE_SCHEMA,
    modelName: "GameTable",
    timestamps: true,
    paranoid: false,
    initialAutoIncrement: TABLE_INDEX.USER_TABLE,
  })
  export class GameTable extends Model<Int_Games> implements Int_Games {
      @Column({
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          get() {
            return parseInt(this.getDataValue("GID"));
        },
      })
      GID: number;
  
      @Column({
          type: DataType.STRING,
          allowNull: false,
      })
      PosterUrl: string;
  
      @Column({
          type: DataType.STRING,
          allowNull: false,
      })
      PosterSize: string;
  
      @Column({
          type: DataType.STRING,
          allowNull: false,
      })
      PosterType: string;
  
      @Column({
          type: DataType.TEXT, // assuming Description can be long
          allowNull: false,
      })
      Description: string;
  
      @Column({
          type: DataType.STRING,
          allowNull: false,
      })
      GameAuthUrl: string;
  
      // Common fields
      @Column({
          type: DataType.DATE,
          allowNull: false,
          defaultValue: DataType.NOW,
      })
      createdAt: Date;
  
      @Column({
          type: DataType.DATE,
          allowNull: false,
          defaultValue: DataType.NOW,
      })
      updatedAt: Date;
  }
  
  export default GameTable;
  