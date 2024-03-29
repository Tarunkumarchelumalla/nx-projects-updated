import { Int_Common } from "./Global";

export interface Int_UserTable extends Int_Common{
    Name:string;
    Profile:string;
    ProfileType:"public"|"private";
    Email:string;
    Score:number;
    Phone:number;
    Followers:number;
    Following:number;
    Token:string;
    GridScore:number;
    Password:string;
    UID:number
    // games Id
}

export interface Int_UserLinkGameTable extends Int_Common{

    ID:number;
    GID:number;
    UID:number;

}