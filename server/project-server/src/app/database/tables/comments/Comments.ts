import { Table, Column, DataType,Model } from "sequelize-typescript";
import { DB_CONFIG } from "../../../environment/environment";
import { Int_Posts } from "../../../models/Posts";
import { TABLE_NAMES, TABLE_INDEX } from "../../constant";
import { Int_Comments } from "../../../models/Comments";

@Table({
    tableName: TABLE_NAMES.COMMENTS_TABLE,
    schema: DB_CONFIG.DATABASE_SCHEMA,
    modelName: "CommentsTable",
    timestamps: true,
    paranoid: false,
    initialAutoIncrement: TABLE_INDEX.AUTH_TOKEN,
  })
export class CommentsTable extends Model<Int_Comments> implements Int_Comments {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        get() {
            return parseInt(this.getDataValue("CID"));
        },
    })
    CID!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    CRID!: number;

    @Column({
        type: DataType.ENUM('TEXT', 'MEDIA'),
        allowNull: false,
    })
    CommentType!: "TEXT" | "MEDIA";

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    Comment!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    CommentUrl!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    CommentUrlType!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    CommentSize!: string;

    @Column({
        type: DataType.STRING,
        primaryKey: true,
        allowNull: false,
    })
    PID!: string;
    // Common fields
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

