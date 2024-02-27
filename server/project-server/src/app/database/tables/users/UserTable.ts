import { Column, DataType, Model, Table } from "sequelize-typescript";
import { TABLE_NAMES, TABLE_INDEX } from "../../constant";

import { DB_CONFIG } from "../../../environment/environment";
import { Int_UserTable } from "../../../models/Users";

@Table({
  tableName: TABLE_NAMES.USER_TABLE,
  schema: DB_CONFIG.DATABASE_SCHEMA,
  modelName: "AuthToken",
  timestamps: true,
  paranoid: false,
  initialAutoIncrement: TABLE_INDEX.USER_TABLE,
})
export class UserTable extends Model<Int_UserTable> implements Int_UserTable {


  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    get() {
      return parseInt(this.getDataValue("UID"));
    },
  })
  UID: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Profile: string;

  @Column({
    type: DataType.ENUM('public', 'private'),
    allowNull: false,
  })
  ProfileType: "public" | "private";

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  Email: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  Score: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  Phone: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  Followers: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  Following: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Token: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  GridScore: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Password: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: true,
    get() {
      return !!this.getDataValue("IsActive");
    },
  })
  IsActive: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  createdBy: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  updatedBy: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  deletedBy: number;
}