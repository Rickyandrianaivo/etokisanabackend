import { Schema, model } from "mongoose";
export const ProductSchema = new Schema({
    codeCPC: { type: String },
    productName: { type: String },
    productDescription: { type: String },
    productCategory: { type: String },
    productState: { type: String },
    productImage: { type: [String] },
    productValidation: { type: Boolean },
    productVolume: { type: Number },
    productHauteur: { type: Number },
    productLargeur: { type: Number },
    productLongueur: { type: Number },
    productPoids: { type: Number },
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