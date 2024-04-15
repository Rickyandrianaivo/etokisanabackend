import { Schema, model } from "mongoose";
export const MouvementStockSchema = new Schema({
    numeroLigne: { type: Number, required: true },
    date: { type: Date, required: true },
    article: { type: Schema.Types.ObjectId, ref: 'article', required: true },
    numeroDocument: { type: String, required: true },
    typeDocument: { type: String, required: true },
    sousTypeDocument: { type: String },
    quantite: { type: Number, required: true },
    valeurDuMouvement: { type: Number, required: true },
    stockReel: { type: Number, required: true },
    valeurStock: { type: Number, required: true },
    depot: { type: String, required: true },
    codeSociete: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true
    }
});
export const MouvementStockModel = model('mouvementStock', MouvementStockSchema);
//# sourceMappingURL=mouvementStock.model.js.map