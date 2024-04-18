import { Schema,model } from "mongoose";

export interface IBonDeRetourFournisseur{
    CodeSociete     : string,
    PointDeVente    : string,
    Depot           : string,
    Doc_no          : string,
    DateBR          : Date,
    MontantHT       : number,
    MontantTVA      : number,
    MontantTTC      : number,
    NumBR           : string,
    NumFournisseur  : string,
    NomFournisseur  : string,
    NumFacFsr       : string,
    DateFacFsr      : Date,
    TypeDocument    : string,
}

export const BonDeRetourFournisseurSchema = new Schema<IBonDeRetourFournisseur>({
    CodeSociete             : { type : String, required : false},
    PointDeVente            : { type : String, required : false},
    Depot                   : { type : String, required : false},
    Doc_no                  : { type : String, required : false},
    DateBR                  : { type : Date, required : false},
    MontantHT               : { type : Number, required : false},
    MontantTVA              : { type : Number, required : false},
    MontantTTC              : { type : Number, required : false},
    NumBR                   : { type : String, required : false},
    NumFournisseur          : { type : String, required : false},
    NomFournisseur          : { type : String, required : false},
    NumFacFsr               : { type : String, required : false},
    DateFacFsr              : { type : Date , required : false},
    TypeDocument            : { type : String, required : false}
},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
    timestamps:true
})

export const BonDeRetourFournisseurModel = model<IBonDeRetourFournisseur>('bonDeRetourFournisseur',BonDeRetourFournisseurSchema)