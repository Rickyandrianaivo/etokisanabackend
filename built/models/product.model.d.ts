import { Schema } from "mongoose";
export interface Product {
    productName: string;
    productDescription: string;
    productPrice: number;
    productCategory: string;
    productUnite: string;
    productStock: number;
    productState: string;
    productOwner: string;
    productImage: string[];
    productValidation: boolean;
    productVolume: number;
    productHauteur: number;
    productLargeur: number;
    productLongueur: number;
    productPoids: number;
}
export declare const ProductSchema: Schema<Product, import("mongoose").Model<Product, any, any, any, import("mongoose").Document<unknown, any, Product> & Product & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Product>> & import("mongoose").FlatRecord<Product> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ProductModel: import("mongoose").Model<Product, {}, {}, {}, import("mongoose").Document<unknown, {}, Product> & Product & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
