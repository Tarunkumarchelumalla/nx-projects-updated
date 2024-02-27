
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Int_Rankings } from '../../../models/masters/Rankings';
import { DB_CONFIG } from '../../../environment/environment';
import { TABLE_NAMES, TABLE_INDEX } from '../../constant';


@Table({
    tableName: TABLE_NAMES.MASTER_RANKINGS_TABLE,
    schema: DB_CONFIG.DATABASE_SCHEMA,
    modelName: "rankingsTable",
    timestamps: true,
    paranoid: false,
    initialAutoIncrement: TABLE_INDEX.USER_TABLE,
  })
export class RankingsTable extends Model<Int_Rankings> implements Int_Rankings {
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
        type: DataType.STRING,
        allowNull: false,
    })
    UID: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    Score: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    Followers: string;

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
