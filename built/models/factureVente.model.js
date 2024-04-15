import { Schema, model } from "mongoose";
export const FactureVenteSchema = new Schema({
    numeroDocument: { type: String, required: true },
    date: { type: Date, required: true },
    numeroClient: { type: String },
    totalHT: { type: Number, required: true },
    totalTVA: { type: Number, required: true },
    totalTTC: { type: Number, required: true },
    montantAcompte: { type: Number, required: true },
    netAPayer: { type: Number, required: true },
    paye: { type: Boolean },
    annule: { type: Boolean },
    depot: { type: String, required: true },
    soldeDu: { type: Number, required: true }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const FactureVenteModel = model('factureVente', FactureVenteSchema);
//# sourceMappingURL=factureVente.model.js.map