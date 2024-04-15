import { Schema, model } from "mongoose";
export const BonSortiesDetailsSchema = new Schema({
    article: { type: Schema.Types.ObjectId, ref: 'article', required: true },
    quantiteCommande: { type: Number, required: true },
    quantiteSortie: { type: Number, required: true },
    prixUnitaireVenteHT: { type: Number, required: true },
    montantNetHT: { type: Number, required: true },
    montantTVA: { type: Number, required: true },
    montantNetTTC: { type: Number, required: true },
    bonSortieNumDoc: { type: String, required: true }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
export const BonSortiesDetailsModel = model('bonSortiesDetail', BonSortiesDetailsSchema);
//# sourceMappingURL=bonSortieDetails.model.js.map