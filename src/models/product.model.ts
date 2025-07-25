import { Schema, model } from "mongoose";

export interface Product{
    // id              : string,
    codeCPC             :string;
    productName         :string;
    productDescription  :string;
    productCategory     :string;
    productState        :string;
    productImage        :string[];
    productValidation   :boolean;
    productVolume       :number;
    productHauteur      :number;
    productLargeur      :number;
    productLongueur     :number;
    productPoids        :number;
}

export const ProductSchema = new Schema<Product>({
    codeCPC             : {type : String},
    productName         : {type : String},
    productDescription  : {type : String},
    productCategory     : {type : String},
    productState        : {type : String},
    productImage        : {type : [String]},
    productValidation   : {type : Boolean},
    productVolume       : {type: Number},
    productHauteur      : {type:Number},
    productLargeur      : {type: Number},
    productLongueur     : {type: Number},
    productPoids        : {type: Number},
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