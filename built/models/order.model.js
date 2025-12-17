"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderModel = exports.orderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.orderSchema = new mongoose_1.Schema({
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
exports.orderModel = (0, mongoose_1.model)("order", exports.orderSchema);
//# sourceMappingURL=order.model.js.map