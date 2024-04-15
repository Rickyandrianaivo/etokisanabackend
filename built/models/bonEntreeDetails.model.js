import { Schema, model } from "mongoose";
export const BonEntreeDetailsSchema = new Schema({
    article: { type: Schema.Types.ObjectId, ref: 'article', required: true },
    quantiteCommande: { type: Number, required: true },
    quantiteEntree: { type: Number, required: true },
    montantNetHT: { type: Number, required: true },
    montantTVA: { type: Number, required: true },
    montantNetTTC: { type: Number, required: true },
    bonEntreeNumDoc: { type: String, required: true }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
export const BonEntreeDetailsModel = model('bonentreedetail', BonEntreeDetailsSchema);
//# sourceMappingURL=bonEntreeDetails.model.js.map