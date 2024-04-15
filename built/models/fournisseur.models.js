import { Schema, model } from "mongoose";
export const FournisseurSchema = new Schema({
    codeFournisseur: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String },
    civilite: { type: String },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const FournisseurModel = model('Fournisseur', FournisseurSchema);
//# sourceMappingURL=fournisseur.models.js.map