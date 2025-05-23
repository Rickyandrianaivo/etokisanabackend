import { model, Schema } from "mongoose";

export interface ITransactionItem{
    transactionProduct      :string;
    transactionQuantity     :number;
    transactionPrice        :number;
    transactionID           :string;
    // transactionDiscount     :string;
}
export const TransactionItemSchema = new Schema<ITransactionItem>({
    transactionProduct      :{type:String},
    transactionPrice        :{type:Number},
    transactionQuantity     :{type:Number},
    transactionID           :{type:String},
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
})

export const TransactionItemModel = model<ITransactionItem>("transactionItem",TransactionItemSchema);