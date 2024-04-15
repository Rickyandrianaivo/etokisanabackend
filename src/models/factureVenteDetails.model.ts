import { CartItem, CartItemSchema } from './cartItem.model';

import { Schema, Types, model } from "mongoose"


export interface FactureVenteDetails{
    pointDeVente        : Types.ObjectId;
    article             : Types.ObjectId;
    quantite            : number;
    prixVenteTTC        : number;
    remise              : number;
    montantNetTTC       : number;
    factureVenteNumDoc  : string
}

export const FactureVenteDetailsSchema = new Schema<FactureVenteDetails>(
    {
        pointDeVente        : { type : Schema.Types.ObjectId, ref : "pointDeVente" , required : true},
        article             : { type : Schema.Types.ObjectId, ref : 'article', required : true},
        quantite            : { type : Number,required : true},
        prixVenteTTC        : { type : Number, required : true},
        remise              : { type : Number, required : true},
        montantNetTTC       : { type : Number, required : true},
        factureVenteNumDoc  : { type : String, required : true}
    },{
        timestamps : true,
        toJSON : {
            virtuals : true
        },
        toObject : {
            virtuals : true
        }
    }
)

export const FactureVenteDetailsModel = model<FactureVenteDetails>('factureVenteDetail',FactureVenteDetailsSchema);