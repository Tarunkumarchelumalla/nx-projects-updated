import { Int_Common } from "../Global";

export interface Int_Games extends Int_Common{
    GID:number;
    GameName:string;
    PosterUrl:string;
    PosterSize:string;
    PosterType:string;
    Description:string;
    GameAuthUrl:string;
}