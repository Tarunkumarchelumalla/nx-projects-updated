export interface Int_Common {
    IsActive?: boolean;
    createdAt?: Date;
    createdBy?: number;
    updatedAt?: Date;
    updatedBy?: number;
    deletedAt?: Date;
    deletedBy?: number;
  }
  
  export interface ErrorException {
    message?: string;
  }
  
  export interface Int_UserLogin {
    Username: string;
    Password: string;
    CID: number;
    AID: number;
  }