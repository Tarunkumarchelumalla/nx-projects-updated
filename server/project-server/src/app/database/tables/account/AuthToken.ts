import { Column, DataType, Model, Table } from "sequelize-typescript";
import { TABLE_NAMES, TABLE_INDEX } from "../../constant";
import { DB_CONFIG } from "../../../environment/environment";
import { Int_AuthToken } from "../../../models/Account";

@Table({
  tableName: TABLE_NAMES.AUTH_TOKEN,
  schema: DB_CONFIG.DATABASE_SCHEMA,
  modelName: "AuthToken",
  timestamps: true,
  paranoid: false,
  initialAutoIncrement: TABLE_INDEX.AUTH_TOKEN,
})
export class AuthToken extends Model<Int_AuthToken> implements Int_AuthToken {
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
    type: DataType.INTEGER,
    allowNull: false,
  })
  UID: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  Token: string;

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