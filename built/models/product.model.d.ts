import { Schema } from "mongoose";
export interface Product {
    _id: string;
    codeCPC: string;
    productName: string;
    productDescription: string;
    productCategory: string;
    productState: string;
    productImage: string[];
    productOwnerId: string;
    productValidation: boolean;
    productVolume: string;
    productHauteur: string;
    productLargeur: string;
    productLongueur: string;
    productPoids: string;
    isStocker: boolean;
}
export declare const ProductSchema: Schema<Product, import("mongoose").Model<Product, any, any, any, import("mongoose").Document<unknown, any, Product, any, {}> & Product & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Product>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Product> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
export declare const ProductModel: import("mongoose").Model<Product, {}, {}, {}, import("mongoose").Document<unknown, {}, Product, {}, {}> & Product & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
