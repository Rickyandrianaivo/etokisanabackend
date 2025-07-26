import mongoose, { Schema, model } from "mongoose";
export const ProductSchema = new Schema({
    codeCPC: { type: String },
    productName: { type: String },
    productDescription: { type: String },
    productCategory: { type: String },
    productState: { type: String },
    productImage: { type: [String] },
    productOwnerId: { type: String },
    productValidation: { type: Boolean },
    productVolume: { type: mongoose.Types.Decimal128 },
    productHauteur: { type: mongoose.Types.Decimal128 },
    productLargeur: { type: mongoose.Types.Decimal128 },
    productLongueur: { type: mongoose.Types.Decimal128 },
    productPoids: { type: mongoose.Types.Decimal128 },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const ProductModel = model('product', ProductSchema);
//# sourceMappingURL=product.model.js.map