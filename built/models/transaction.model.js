import { model, Schema } from "mongoose";
export const TransactionSchema = new Schema({
    // _id         : {type:String},
    userId: { type: String, required: true },
    siteDepartId: { type: String },
    siteArriveId: { type: String, required: true },
    typeES: { type: String, required: true },
    montantTotal: { type: Number, required: true },
    statut: { type: String },
    productList: { type: [Object] },
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