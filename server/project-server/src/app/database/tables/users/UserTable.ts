import { Column, DataType, Model, Table } from "sequelize-typescript";
import { TABLE_NAMES, TABLE_INDEX } from "../../constant";

import { DB_CONFIG } from "../../../environment/environment";
import { Int_UserTable } from "../../../models/UserTable";

@Table({
  tableName: TABLE_NAMES.USER_TABLE,
  schema: DB_CONFIG.DATABASE_SCHEMA,
  modelName: "AuthToken",
  timestamps: true,
  paranoid: false,
  initialAutoIncrement: TABLE_INDEX.USER_TABLE,
})
export class UserTable extends Model<Int_UserTable> implements Int_UserTable {
  UID: string;
  Name: string;
  Profile: string;
  ProfileType: string;
  Score: number;
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    get() {
      return parseInt(this.getDataValue("ID"));
    },
  })
  ID: number;

  @Column({
    type:DataType.ARRAY(DataType.STRING),
    allowNull:true,
  })
  Games: string[];

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