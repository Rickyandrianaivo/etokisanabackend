import { model, Schema } from "mongoose";
export const JournalSchema = new Schema({
    userId: { type: String },
    codeProduit: { type: String, required: true },
    destination: { type: String },
    valeur: { type: Number },
    productId: { type: String }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const JournalModel = model('category', JournalSchema);
//# sourceMappingURL=journal.model.js.map