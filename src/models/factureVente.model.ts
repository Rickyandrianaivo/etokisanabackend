
import mongoose, { Mongoose, ObjectId, Schema, Types, model } from "mongoose"
import { FactureVenteDetails, FactureVenteDetailsSchema } from "./factureVenteDetails.model";


export interface FactureVente{
    id                  : string,
    numeroDocument      : string,
    date                : Date,
    numeroClient        : string,
    totalHT             : number,
    totalTVA            : number,
    totalTTC            : number,
    montantAcompte      : number,
    netAPayer           : number,
    paye                : boolean,
    annule              : boolean,
    depot               : string,
    soldeDu             : number
}

export const FactureVenteSchema = new Schema<FactureVente>(
    {
        numeroDocument      : { type : String, required : true},
        date                : { type : Date, required : true},
        numeroClient        : { type : String},
        totalHT             : { type : Number, required : true},
        totalTVA            : { type : Number, required : true},
        totalTTC            : { type : Number, required : true},
        montantAcompte      : { type : Number, required : true},
        netAPayer           : { type : Number, required : true},
        paye                : { type : Boolean},
        annule              : { type : Boolean},
        depot               : { type : String, required : true},
        soldeDu             : { type : Number, required : true}
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

export const FactureVenteModel = model<FactureVente>('factureVente',FactureVenteSchema);