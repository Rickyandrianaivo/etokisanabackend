import { Schema, Types, model } from "mongoose"

export interface BonEntreeDetails{
    // id                  : string,
    article             : Types.ObjectId;
    quantiteCommande    : number;
    quantiteEntree      : number;
    montantNetHT        : number;
    montantTVA          : number;
    montantNetTTC       : number;
    bonEntreeNumDoc     : string
}

export const BonEntreeDetailsSchema = new Schema<BonEntreeDetails>({
    article             : { type : Schema.Types.ObjectId,ref : 'article', required : true },
    quantiteCommande    : { type : Number, required : true },
    quantiteEntree      : { type : Number, required : true },
    montantNetHT        : { type : Number, required : true },
    montantTVA          : { type : Number, required : true },
    montantNetTTC       : { type : Number, required : true },
    bonEntreeNumDoc     : { type : String, required : true}
},{
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    },
    timestamps : true
}
)

export const BonEntreeDetailsModel = model<BonEntreeDetails>('bonentreedetail',BonEntreeDetailsSchema)