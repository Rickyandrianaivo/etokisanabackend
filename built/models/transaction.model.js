"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModel = exports.TransactionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TransactionSchema = new mongoose_1.Schema({
    // _id         : {type:String},
    userId: { type: String, required: true },
    siteDepartId: { type: String, ref: 'site' },
    siteArriveId: { type: String, required: true, ref: 'site' },
    typeES: { type: String, required: true },
    montantTotal: { type: Number, required: true },
    statut: { type: String },
    productList: { type: [Object] },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.TransactionModel = (0, mongoose_1.model)("transaction", exports.TransactionSchema);
//# sourceMappingURL=transaction.model.js.map