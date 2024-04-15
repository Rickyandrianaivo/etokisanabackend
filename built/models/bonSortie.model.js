import { Schema, model } from "mongoose";
export const BonSortiesSchema = new Schema({
    numeroDocument: { type: String, required: true },
    date: { type: Date, required: true },
    typeDocument: { type: String, default: "Entrée" },
    codeSociete: { type: String, required: true },
    depot: { type: String },
    valide: { type: Boolean, default: false },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const BonSortiesModel = model('bonSorties', BonSortiesSchema);
//# sourceMappingURL=bonSortie.model.js.map