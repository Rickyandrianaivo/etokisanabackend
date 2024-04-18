import { Schema,model } from "mongoose";

export interface IAchats {
    Doc_no          : string,
    CodeSociete     : string,
    Depot           : string,
    DateBR          : Date,
    NumBr           : string,
    NumFournisseur  : string,
    NomFournisseur  : string,
    MontantHT       : number,
    MontantTVA      : number,
    MontantBR       : number,
    NumFacFsr       : string,
    DateFacFsr      : Date,
    TypeDocument    : string
}

export const AchatsSchema = new Schema<IAchats>({
    Doc_no              : {type : String, required : false},
    CodeSociete         : {type : String, required : false},
    Depot               : {type : String, required : false},
    DateBR              : {type : Date, required : false},
    NumBr               : {type : String, required : false},
    NumFournisseur      : {type : String, required : false},
    NomFournisseur      : {type : String, required : false},
    MontantHT           : {type : Number, required : false},
    MontantTVA          : {type : Number, required : false},
    MontantBR           : {type : Number, required : false},
    NumFacFsr           : {type : String, required : false},
    DateFacFsr          : {type : Date, required : false},
    TypeDocument        : {type : String, required : false},
},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
    timestamps:true
})

export const AchatsModel = model<IAchats>('achat',AchatsSchema)