import { Column, DataType, Model, Table } from "sequelize-typescript";
import { TABLE_NAMES, TABLE_INDEX } from "../../constant";
import { DB_CONFIG } from "../../../environment/environment";
import { Int_UserLinkGameTable } from "../../../models/Users";
import { Int_Common } from "../../../models/Global";

@Table({
  tableName: TABLE_NAMES.USER_TABLE,
  schema: DB_CONFIG.DATABASE_SCHEMA,
  modelName: "UserLinkGameTable",
  timestamps: true,
  paranoid: false,
  initialAutoIncrement: TABLE_INDEX.USER_TABLE,
})
export class UserLinkGameTable extends Model<Int_UserLinkGameTable> implements Int_Common {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        get(){
            return parseInt(this.getDataValue("ID"));
        }
    })
    ID!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    GID!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    UID!: number;

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