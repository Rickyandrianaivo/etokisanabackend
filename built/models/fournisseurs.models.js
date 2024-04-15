import { Schema, model } from "mongoose";
export const FournisseurSchema = new Schema({
    fournisseur_code: { type: String, required: true },
    fournisseur_raisonSociale: { type: String, required: true },
    fournisseur_codeFamille: { type: String, required: false },
    fournisseur_famille: { type: String, required: false },
    fournisseur_CA_mensuel: { type: Number, required: false },
    fournisseur_CA_annuel: { type: Number, required: false },
    fournisseur_CA_cumul: { type: Number, required: false },
    fournisseur_date_dernier_achat: { type: String, required: false },
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
export const FournisseurModel = model('fournisseur', FournisseurSchema);
//# sourceMappingURL=fournisseurs.models.js.map