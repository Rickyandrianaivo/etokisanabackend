import { Schema, model } from "mongoose";

export interface User{
    // id              : string,
    userName            : string;
    userFirstname       :string;
    userPassword        : string;
    userEmail           : string;
    userPhone           : string;
    userDescritpion     : string;
    userGender          : string;
    userImage           : string;
    userEnabled         : boolean;
    userDateOfBirth     : Date;
    userTotalSolde      : number;
    userLogo            : string;
    userStatut          : string;
    userManager         : string;
    userNif             : string;
    userRC              : string;
    identityDocumentType: string;
    identityCardNumber  : string;
    userAdmin           : boolean;
    userAddress         : string;
    userIdentityCode    : string;
}

export const UserSchema = new Schema<User>({
    userName                : {type : String},
    userFirstname           : {type : String, required : true},
    userPassword            : {type : String, required : true},
    userEmail               : {type : String, required : true},
    userPhone               : {type : String, required : true},
    userDescritpion         : {type : String},
    userGender              : {type : String, required : true},
    userImage               : {type : String},
    userEnabled             : {type : Boolean, required : true},
    userDateOfBirth         : {type : Date, required : true},
    userTotalSolde          : {type : Number},
    userLogo                : {type : String},
    userStatut              : {type : String},
    userManager             : {type : String},
    userNif                 : {type : String},
    userRC                  : {type : String},
    identityDocumentType    : {type : String, required : true},
    identityCardNumber      : {type : String, required : true},
    userAddress             : {type : String},
    userIdentityCode        : {type : String},
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