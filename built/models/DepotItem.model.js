"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepotItemModel = exports.DepotItemSchema = void 0;
const mongoose_1 = require("mongoose");
exports.DepotItemSchema = new mongoose_1.Schema({
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
exports.DepotItemModel = (0, mongoose_1.model)('depotItem', exports.DepotItemSchema);
//# sourceMappingURL=DepotItem.model.js.map