import { model, Schema } from "mongoose";

export interface iCorporateUser{
    userId                  : string,
    raisonSocial            : string,
    type                    : string,
    rcs                     : string,
    carteStat               : string,
    nif                     : string,
    carteFiscal             : string,
    logo                    : string,
    managerName             : string,
    managerEmail            : string,
    contactName             : string,
    contactPhone            : string;
    contactEmail            : string, 
    siegeAddress            : string,
    siegeLat                : string,
    siegeLng                : string,
    contactEmailVerified    : boolean,
    corporateUserValidated  : boolean,
    userTotalSolde          : number,
    userAccess              : string,
    userPassword            : string,
}

export const CorporateUser = new Schema<iCorporateUser>({
    userId                  : { type : String , required : true},
    raisonSocial            : { type : String , required : true},
    type                    : { type : String }, 
    rcs                     : { type : String , required : true},
    carteStat               : { type : String },
    nif                     : { type : String , required : true},
    carteFiscal             : { type : String },
    logo                    : { type : String },
    managerName             : { type : String },
    managerEmail            : { type : String },
    contactName             : { type : String , required : true},
    contactPhone            : { type : String },
    contactEmail            : { type : String , required : true},
    siegeAddress            : { type : String , required : true},
    siegeLat                : { type : String , required : true},
    siegeLng                : { type : String , required : true},
    contactEmailVerified    : { type : Boolean},
    corporateUserValidated  : { type : Boolean},
    userTotalSolde          : { type : Number},
    userAccess              : { type : String},
    userPassword            : { type : String, required : true},
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
});

export const CorporateUserModel = model<iCorporateUser>('corporateUser',CorporateUser)