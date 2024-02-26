import { Int_Common } from "./Global";

export interface Int_Comments extends Int_Common{
    CID:number;
    CRID:number;
    CommentType:"TEXT"|"MEDIA";
    Comment:string;
    CommentUrl:string;
    CommentUrlType:string;
    CommentSize:string;
} 