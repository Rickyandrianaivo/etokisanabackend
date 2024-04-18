import { Schema, model } from "mongoose";

export interface IBonDeCommandeDetails{
    Codesociete : string,
    Doc_no : string,
    Depot : string,
    DateCommande : Date,
    NumCommande : number,
    NumLigne : number,
    Reference : string,
    Designation : string,
    PrixUnitaire : number,
    Quantite : number,
    MontantLigne : number,
    EnvoiCommande : boolean,
    Famille : string,
    SousFamille : string,
    QteEnStock : number,
}

export const BonDeCommandeDetailSchema  = new Schema<IBonDeCommandeDetails>({
    Codesociete             : { type : String , required : false },
    Doc_no                  : { type : String , required : false },
    Depot                   : { type : String , required : false },
    DateCommande            : { type : Date , required : false },
    NumCommande             : { type : Number , required : false },
    NumLigne                : { type : Number , required : false },
    Reference               : { type : String , required : false },
    Designation             : { type : String , required : false },
    PrixUnitaire            : { type : Number , required : false },
    Quantite                : { type : Number , required : false },
    MontantLigne            : { type : Number , required : false },
    EnvoiCommande           : { type : Boolean , required : false }, 
    Famille                 : { type : String , required : false },
    SousFamille             : { type : String , required : false },
    QteEnStock              : { type : Number , required : false },
},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
    timestamps:true
})

export const BonDeCommandesDetailsModel = model<IBonDeCommandeDetails>('BonDeCommandesDetail',BonDeCommandeDetailSchema)