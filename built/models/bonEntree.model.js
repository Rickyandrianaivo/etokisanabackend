import { Schema, model } from "mongoose";
export const BonEntreeSchema = new Schema({
    numeroDocument: { type: String },
    date: { type: Date },
    typeDocument: { type: String, default: "Entrée" },
    codeSociete: { type: String },
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
export const BonEntreeModel = model('bonEntree', BonEntreeSchema);
//# sourceMappingURL=bonEntree.model.js.map