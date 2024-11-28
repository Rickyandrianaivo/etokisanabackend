import { Schema, model } from "mongoose";

export interface Product{
    // id              : string,
    productName         :string;
    productDescription  :string;
    productPrice        :number;
    productCategory     :string;
    productUnite        :string;
    productStock        :number;
    productState        :string;
    productSource       :string;
}

export const ProductSchema = new Schema<Product>({
    productName         : {type : String},
    productDescription  : {type : String},
    productPrice        : {type : Number},
    productCategory     : {type : String},
    productUnite        : {type : String},
    productStock        : {type : Number},
    productState        : {type : String},
    productSource       : {type : String},
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