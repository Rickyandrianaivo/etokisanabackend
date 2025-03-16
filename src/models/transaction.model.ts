import { model, Schema } from "mongoose";

export interface ITransaction{
    userId      : string ;
    tiersId     : string ;
    codeProduit : string ;
    typeES      : string ; 
    produitId   : string ;
    libelle     : string ;
    montant     : number ;
    statut      : string ;
    siteId     : string ;
}
export const TransactionSchema = new Schema<ITransaction>({
    userId      :{ type:String, required:true },
    tiersId     :{ type:String, required:true },
    codeProduit :{ type:String },
    produitId   :{ type:String },
    libelle     :{ type:String },
    montant     :{ type:Number, required:true },
    statut      :{ type:String },
    siteId      :{ type:String },
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
})

export const TransactionModel = model<ITransaction>("transaction",TransactionSchema);