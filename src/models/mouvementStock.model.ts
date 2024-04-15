import { Date, Schema, Types, model } from "mongoose"

export interface MouvementStock{
    // id                  : string,
    numeroLigne         : number;
    date                : Date;
    article             : Types.ObjectId;
    numeroDocument      : string;
    typeDocument        : string;
    sousTypeDocument    : string;
    quantite            : number;
    valeurDuMouvement   : number;
    stockReel           : number;
    valeurStock         : number;
    depot               : string;
    codeSociete         : string;
}

export const MouvementStockSchema = new Schema<MouvementStock>(
    {
        numeroLigne         : { type : Number, required : true},
        date                : { type : Date, required : true},
        article             : { type : Schema.Types.ObjectId, ref : 'article', required : true},
        numeroDocument      : { type : String, required : true},
        typeDocument        : { type : String, required : true},
        sousTypeDocument    : { type : String},
        quantite            : { type : Number, required : true},
        valeurDuMouvement   : { type : Number, required : true},
        stockReel           : { type : Number, required : true},
        valeurStock         : { type : Number, required : true},
        depot               : { type : String, required : true},
        codeSociete         : { type : String, required : true},
    },{
        timestamps : true,
        toJSON : {
            virtuals : true,
        },
        toObject : {
            virtuals : true
        }
    }
)

export const MouvementStockModel = model<MouvementStock>('mouvementStock',MouvementStockSchema)