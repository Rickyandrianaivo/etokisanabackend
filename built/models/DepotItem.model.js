import { model, Schema } from "mongoose";
export const DepotItemSchema = new Schema({
    currentDepotId: { type: String, ref: 'site' },
    productId: { type: String, ref: 'product' },
    stock: { type: Number },
    prix: { type: Number },
    lastUpdate: { type: Date },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const DepotItemModel = model('depotItem', DepotItemSchema);
//# sourceMappingURL=DepotItem.model.js.map