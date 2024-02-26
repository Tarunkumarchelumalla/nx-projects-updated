import { Model } from "sequelize";
import { Table, Column, DataType } from "sequelize-typescript";
import { DB_CONFIG } from "../../../environment/environment";
import { Int_Posts } from "../../../models/Posts";
import { TABLE_NAMES, TABLE_INDEX } from "../../constant";

@Table({
    tableName: TABLE_NAMES.COMMENTS_TABLE,
    schema: DB_CONFIG.DATABASE_SCHEMA,
    modelName: "CommentsTable",
    timestamps: true,
    paranoid: false,
    initialAutoIncrement: TABLE_INDEX.AUTH_TOKEN,
  })
export class PostsTable extends Model<Int_Posts> implements Int_Posts {
    @Column({
        type: DataType.STRING,
        primaryKey: true,
        allowNull: false,
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

export default PostsTable;
