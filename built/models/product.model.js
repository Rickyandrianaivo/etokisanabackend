"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.Schema({
    // _id                 : {type : String},
    codeCPC: { type: String },
    productName: { type: String },
    productDescription: { type: String },
    productCategory: { type: String },
    productState: { type: String },
    productImage: { type: [String] },
    productOwnerId: { type: String },
    productValidation: { type: Boolean },
    productVolume: { type: String },
    productHauteur: { type: String },
    productLargeur: { type: String },
    productLongueur: { type: String },
    productPoids: { type: String },
    isStocker: { type: Boolean },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.ProductModel = (0, mongoose_1.model)('product', exports.ProductSchema);
//# sourceMappingURL=product.model.js.map