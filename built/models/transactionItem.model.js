"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionItemModel = exports.TransactionItemSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TransactionItemSchema = new mongoose_1.Schema({
    _id: { type: String },
    transactionProduct: { type: String },
    transactionPrice: { type: Number },
    transactionQuantity: { type: Number },
    transactionID: { type: String },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.TransactionItemModel = (0, mongoose_1.model)("transactionItem", exports.TransactionItemSchema);
//# sourceMappingURL=transactionItem.model.js.map