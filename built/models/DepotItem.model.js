import { model, Schema } from "mongoose";
export const DepotItemSchema = new Schema({
    _id: { type: String },
    productId: { type: String },
    stock: { type: Number },
    prix: { type: Number },
    lastUpdate: { type: Date },
    currentDepotId: { type: String },
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