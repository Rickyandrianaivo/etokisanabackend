import { Schema, model } from "mongoose";
export const InventaireDetailSchema = new Schema({
    article: { type: Schema.Types.ObjectId, ref: "article", required: true },
    stockTheorique: { type: Number, required: true },
    valeurStockTheorique: { type: Number, required: true },
    stockPhysique: { type: Number, required: true },
    nouvelleValeurStock: { type: Number, required: true },
    ecart: { type: Number, required: true },
    valeurEcart: { type: Number, required: true },
    inventaireNumDoc: { type: String, required: true }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const InventaireDetailModel = model('inventaireDetail', InventaireDetailSchema);
//# sourceMappingURL=inventaireDetail.model.js.map