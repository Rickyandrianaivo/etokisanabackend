import { Schema, model } from "mongoose";
export const ArticleSchema = new Schema({
    codeSociete: { type: String, required: true },
    depot: { type: String, required: true },
    categorie: { type: String, required: true },
    reference: { type: String, required: true },
    designation: { type: String, required: true },
    qteEnStock: { type: Number, required: true },
    unite: { type: String, required: true },
    prixUnitaireAchatTTC: { type: Number, required: true },
    prixUnitaireVenteTTC: { type: Number, required: true },
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
export const ArticleModel = model('article', ArticleSchema);
//# sourceMappingURL=article.models.js.map