
import { Table, Column, DataType,Model } from "sequelize-typescript";
import { Int_Posts } from "../../../models/Posts";
import { DB_CONFIG } from "../../../environment/environment";
import { TABLE_NAMES, TABLE_INDEX } from "../../constant";

@Table({
    tableName: TABLE_NAMES.POSTS_TABLE,
    schema: DB_CONFIG.DATABASE_SCHEMA,
    modelName: "PostsTable",
    timestamps: true,
    paranoid: false,
    initialAutoIncrement: TABLE_INDEX.AUTH_TOKEN,
  })
export class PostsTable extends Model<Int_Posts> implements Int_Posts {
    @Column({
        type: DataType.STRING,
        primaryKey: true,
        allowNull: false,
        get() {
            return parseInt(this.getDataValue("PID"));
        },
    })
    PID: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    UID: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    Caption: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    Description: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    MediaUrl: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    MediaType: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    MediaSize: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    CRID: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    Likes: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    dislikes: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    GID: number;

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
