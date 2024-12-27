import { Schema } from "mongoose";
export interface ICategory {
    CatName: string;
}
export declare const CategorySchema: Schema<ICategory, import("mongoose").Model<ICategory, any, any, any, import("mongoose").Document<unknown, any, ICategory> & ICategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ICategory, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ICategory>> & import("mongoose").FlatRecord<ICategory> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const CategoryModel: import("mongoose").Model<ICategory, {}, {}, {}, import("mongoose").Document<unknown, {}, ICategory> & ICategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
