import { Schema, model } from "mongoose";
;
export const InventaireSchema = new Schema({
    numeroDocument: { type: String, required: true },
    date: { type: Date, required: true },
    typeDocument: { type: String, required: true },
    depot: { type: String, required: true },
    etatValidation: { type: Boolean, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const InventaireModel = model('inventaire', InventaireSchema);
//# sourceMappingURL=inventaire.model.js.map