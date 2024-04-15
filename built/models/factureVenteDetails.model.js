import { Schema, model } from "mongoose";
export const FactureVenteDetailsSchema = new Schema({
    pointDeVente: { type: Schema.Types.ObjectId, ref: "pointDeVente", required: true },
    article: { type: Schema.Types.ObjectId, ref: 'article', required: true },
    quantite: { type: Number, required: true },
    prixVenteTTC: { type: Number, required: true },
    remise: { type: Number, required: true },
    montantNetTTC: { type: Number, required: true },
    factureVenteNumDoc: { type: String, required: true }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const FactureVenteDetailsModel = model('factureVenteDetail', FactureVenteDetailsSchema);
//# sourceMappingURL=factureVenteDetails.model.js.map