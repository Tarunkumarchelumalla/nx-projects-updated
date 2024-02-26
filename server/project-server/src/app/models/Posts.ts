import { Int_Common } from "./Global";

export interface Int_Posts extends Int_Common{
    PID:String;
    UID:string;
    Caption:string;
    Description:string;
    MediaUrl:string;
    MediaType:string;
    MediaSize:string;
    CRID:string;
    Likes:number
    dislikes:number;
    GID:number;
}