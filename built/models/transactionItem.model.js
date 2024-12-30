import { model, Schema } from "mongoose";
export const TransactionItemSchema = new Schema({
    transactionProduct: { type: String },
    transactionPrice: { type: Number },
    transactionQuantity: { type: Number },
    transactionID: { type: String },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const TransactionItemModel = model("transactionItem", TransactionItemSchema);
//# sourceMappingURL=transactionItem.model.js.map