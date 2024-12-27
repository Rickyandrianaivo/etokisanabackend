import { model, Schema } from "mongoose";
export const TransactionSchema = new Schema({
    transactionType: { type: String },
    transactionAmount: { type: Number },
    transactionState: { type: String },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const TransactionModel = model("transaction", TransactionSchema);
//# sourceMappingURL=transaction.model.js.map