import { model, Schema } from "mongoose";

export interface ITransaction{
    transactionType     :string;
    transactionAmount   :number;
    transactionState    :string;
}
export const TransactionSchema = new Schema<ITransaction>({
    transactionType     :{type:String},
    transactionAmount   :{type:Number},
    transactionState    :{type:String},
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