import mongoose, { Decimal128, Double, Schema, model } from "mongoose";

export interface Product{
    // id              : string,
    codeCPC             :string;
    productName         :string;
    productDescription  :string;
    productCategory     :string;
    productState        :string;
    productImage        :string[];
    productOwnerId      :string;
    productValidation   :boolean;
    productVolume       :Decimal128;
    productHauteur      :Decimal128;
    productLargeur      :Decimal128;
    productLongueur     :Decimal128;
    productPoids        :Decimal128;
}

export const ProductSchema = new Schema<Product>({
    codeCPC             : {type : String},
    productName         : {type : String},
    productDescription  : {type : String},
    productCategory     : {type : String},
    productState        : {type : String},
    productImage        : {type : [String]},
    productOwnerId      : {type : String},
    productValidation   : {type : Boolean},
    productVolume       : {type: mongoose.Types.Decimal128},
    productHauteur      : {type: mongoose.Types.Decimal128},
    productLargeur      : {type: mongoose.Types.Decimal128},
    productLongueur     : {type: mongoose.Types.Decimal128},
    productPoids        : {type: mongoose.Types.Decimal128},
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
});

export const ProductModel = model<Product>('product',ProductSchema)