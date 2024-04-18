import { Schema,model } from "mongoose";

export interface IBonDeRetourClient{
    CodeSociete : string,
    PointDeVente : string,
    Doc_no : string,
    NumBL : string,
    DateBL : Date,
    NumClient : string,
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

export const BonDeRetourClientSchema = new Schema<IBonDeRetourClient>({
    CodeSociete             : { type : String, required : false},
    PointDeVente            : { type : String, required : false},
    Doc_no                  : { type : String, required : false},
    NumBL                   : { type : String, required : false},
    DateBL                  : { type : Date, required : false},
    NumClient               : { type : String, required : false},
    IDAdresseLivraison      : { type : Number, required : false},
    IDModeLivraison         : { type : Number, required : false},
    TotalHT                 : { type : Number, required : false},
    TotalTVA                : { type : Number, required : false},
    TotalTTC                : { type : Number, required : false},
    SaisiPar                : { type : String, required : false},
    SaisiLe                 : { type : Date, required : false},
    Observation             : { type : String, required : false},
    NumBC                   : { type : String, required : false},
},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
    timestamps:true
})

export const BonDeRetourClientModel = model<IBonDeRetourClient>('bonDeRetourClient',BonDeRetourClientSchema)