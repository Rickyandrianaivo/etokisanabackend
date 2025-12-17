"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockElementModel = exports.StockElementSchema = void 0;
const mongoose_1 = require("mongoose");
exports.StockElementSchema = new mongoose_1.Schema({
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
exports.StockElementModel = (0, mongoose_1.model)("stockElement", exports.StockElementSchema);
//# sourceMappingURL=stockElement.model.js.map