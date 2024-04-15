import { Schema, Types, model } from "mongoose"

export interface BonSortiesDetails{
    article             : Types.ObjectId;
    quantiteCommande    : number;
    quantiteSortie      : number;
    prixUnitaireVenteHT : number;
    montantNetHT        : number;
    montantTVA          : number;
    montantNetTTC       : number;
    bonSortieNumDoc     : string;
}

export const BonSortiesDetailsSchema = new Schema<BonSortiesDetails>({
    article             : { type : Schema.Types.ObjectId,ref : 'article', required : true},
    quantiteCommande    : { type : Number, required : true },
    quantiteSortie      : { type : Number, required : true },
    prixUnitaireVenteHT : { type : Number, required : true },
    montantNetHT        : { type : Number, required : true },
    montantTVA          : { type : Number, required : true },
    montantNetTTC       : { type : Number, required : true },
    bonSortieNumDoc     : { type : String, required : true}
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

export const BonSortiesDetailsModel = model<BonSortiesDetails>('bonSortiesDetail',BonSortiesDetailsSchema)