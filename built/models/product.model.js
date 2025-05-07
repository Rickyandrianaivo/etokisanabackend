import { Schema, model } from "mongoose";
export const ProductSchema = new Schema({
    productName: { type: String },
    productDescription: { type: String },
    productPrice: { type: Number },
    productCategory: { type: String },
    productUnite: { type: String },
    productStock: { type: Number },
    productState: { type: String },
    productOwner: { type: String },
    productImage: { type: String },
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