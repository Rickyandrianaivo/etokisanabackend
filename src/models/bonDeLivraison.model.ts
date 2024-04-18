import { Schema,model } from "mongoose";

export  interface IBonDeLivraison {
    CodeSociete : string,
    PointDeVente : string,
    Doc_no : string,
    NumBL : string,
    DateBL : Date,
    NumClient : string,
    DateLivraison : Date,
    IDAdresseLivraison : number,
    IDModeLivraison : number,
    TotalHT : number,
    TotalTVA: number,
    TotalTTC : number,
    SaisiPar : string,
    SaisiLe : Date,
    Observation : string,
    NumBC : string,
}

export const  BonDeLivraisonSchema = new Schema<IBonDeLivraison>({
    CodeSociete             : { type : String, required : false},
    PointDeVente            : { type : String, required : false},
    Doc_no                  : { type : String, required : false},
    NumBL                   : { type : String, required : false},
    DateBL                  : { type : Date, required : false},
    NumClient               : { type : String, required : false},
    DateLivraison           : { type : Date, required : false},
    IDAdresseLivraison      : { type : Number, required : false},
    IDModeLivraison         : { type : Number, required : false},
    TotalHT                 : { type : Number, required : false},
    TotalTVA                : { type : Number, required : false},
    TotalTTC                : { type : Number, required : false},
    SaisiPar                : { type : String, required : false},
    SaisiLe                 : { type : Date, required : false},
    Observation             : { type : String, required : false},
    NumBC                   : { type : String, required : false},
})

export const BonDeLivraisonModel = model<IBonDeLivraison>('bonDeLivraison',BonDeLivraisonSchema)