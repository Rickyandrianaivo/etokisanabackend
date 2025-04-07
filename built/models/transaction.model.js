import { model, Schema } from "mongoose";
export const TransactionSchema = new Schema({
    userId: { type: String, required: true },
    tiersId: { type: String, required: true },
    codeProduit: { type: String },
    produitId: { type: String },
    libelle: { type: String },
    montant: { type: Number, required: true },
    statut: { type: String },
    siteId: { type: String },
    typeES: { type: String, required: true },
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