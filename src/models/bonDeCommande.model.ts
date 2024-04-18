import { Schema,model } from "mongoose";

export  interface IBonDeCommande {
    CodeSociete : string,
    PointDeVente : string,
    Depot : string,
    NumBC : string,
    DateBC : Date,
    SaisiPar : string,
    SaisiLe : Date,
}

export const  BonDeCommandeSchema = new Schema<IBonDeCommande>({
    CodeSociete             : { type : String, required : false},
    PointDeVente            : { type : String, required : false},
    Depot                  : { type : String, required : false},
    NumBC                   : { type : String, required : false},
    DateBC                : { type : Date, required : false},
    SaisiPar                : { type : String, required : false},
    SaisiLe                 : { type : Date, required : false},
})

export const BonDeCommandeModel = model<IBonDeCommande>('bonDeCommande',BonDeCommandeSchema)