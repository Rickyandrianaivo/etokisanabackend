import mongoose, { Decimal128 } from "mongoose";
export interface Product {
    codeCPC: string;
    productName: string;
    productDescription: string;
    productCategory: string;
    productState: string;
    productImage: string[];
    productOwnerId: string;
    productValidation: boolean;
    productVolume: Decimal128;
    productHauteur: Decimal128;
    productLargeur: Decimal128;
    productLongueur: Decimal128;
    productPoids: Decimal128;
}
export declare const ProductSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, mongoose.Document<unknown, any, Product> & Product & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Product, mongoose.Document<unknown, {}, mongoose.FlatRecord<Product>> & mongoose.FlatRecord<Product> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ProductModel: mongoose.Model<Product, {}, {}, {}, mongoose.Document<unknown, {}, Product> & Product & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
