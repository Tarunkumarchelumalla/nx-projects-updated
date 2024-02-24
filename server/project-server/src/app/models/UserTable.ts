import { Int_Common } from "./Global";

export interface Int_UserTable extends Int_Common{
    Name:string;
    Profile:string;
    ProfileType:string;
    Games:string[];
    Score:number;

}