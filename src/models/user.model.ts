import { Schema, model } from "mongoose";

export interface User{
    // id              : string,
    userName            : string;
    userFirstname       : string;
    userPassword        : string;
    userEmail           : string;
    userPhone           : string;
    userType            : string;
    userTotalSolde      : number;
    userAccess          : string;
    userParainID        : string;
    userValidated       : boolean;
    userEmailVerified   : boolean;
    userDateOfBirth     : Date;
    userAddress         : string;
    userMainLat         : number;
    userMainLng         : number
    // userDescritpion     : string;
    // userImage           : string;
    // userLogo            : string;
    // userStatut          : string;
    // userManager         : string;
    // userNif             : string;
    // userRC              : string;
    // identityDocumentType: string;
    // identityCardNumber  : string;
    // userIdentityCode    : string;
}

export const UserSchema = new Schema<User>({
    userName                : {type : String},
    userFirstname           : {type : String, required : true},
    userPassword            : {type : String, required : true},
    userEmail               : {type : String, required : true, unique:true},
    userPhone               : {type : String, required : true},
    userType                : {type : String, required : true},
    userTotalSolde          : {type : Number},
    userAccess              : {type : String, required : true},
    userParainID            : {type : String },
    userValidated           : {type : Boolean },
    userEmailVerified       : {type : Boolean },
    userMainLat             : {type : Number},
    userMainLng             : {type : Number},
    // userDescritpion         : {type : String},
    // userImage               : {type : String},
    // userDateOfBirth         : {type : Date },
    // userLogo                : {type : String},
    // userStatut              : {type : String},
    // userManager             : {type : String},
    // userNif                 : {type : String},
    // userRC                  : {type : String},
    // identityDocumentType    : {type : String},
    // identityCardNumber      : {type : String},
    // userAddress             : {type : String},
    // userIdentityCode        : {type : String},
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
});

export const UserModel = model<User>('user',UserSchema)