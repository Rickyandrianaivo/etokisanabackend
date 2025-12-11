import { model, Schema } from "mongoose";
export const orderSchema = new Schema({
    orderType: { type: String },
    orderMontant: { type: Number },
    orderState: { type: String },
    orderMethode: { type: String }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const orderModel = model("order", orderSchema);
//# sourceMappingURL=order.model.js.map