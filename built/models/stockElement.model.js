import { model, Schema } from "mongoose";
export const StockElementSchema = new Schema({
    depotId: { type: String, required: true },
    productId: { type: String, required: true },
    quantity: { type: Number },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const StockElementModel = model("stockElement", StockElementSchema);
//# sourceMappingURL=stockElement.model.js.map