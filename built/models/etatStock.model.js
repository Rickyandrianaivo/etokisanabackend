import { Schema, model } from 'mongoose';
import { FamilleArticleSchema } from './familleArticle.model';
export const EtatStockSchema = new Schema({
    dateSituation: { type: Date, required: true },
    famille: { type: FamilleArticleSchema, required: true },
    codeArticle: { type: String, required: true },
    designation: { type: String, required: true },
    quantite: { type: Number, required: true },
    valeurUnitaire: { type: Number, required: true },
    valeurStock: { type: Number, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const EtatStockModel = model('etatStock', EtatStockSchema);
//# sourceMappingURL=etatStock.model.js.map