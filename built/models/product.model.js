import { Schema, model } from "mongoose";
export const ProductSchema = new Schema({
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