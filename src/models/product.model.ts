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
    productOwner        :string;
    productImage        :string;
    productValidation   :boolean;
    productVolume       :number;
    productHauteur      :number;
    productLargeur      :number;
    productLongueur     :number;
    productPoids        :number;
}

export const ProductSchema = new Schema<Product>({
    productName         : {type : String},
    productDescription  : {type : String},
    productPrice        : {type : Number},
    productCategory     : {type : String},
    productUnite        : {type : String},
    productStock        : {type : Number},
    productState        : {type : String},
    productOwner        : {type : String},
    productImage        : {type : String},
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