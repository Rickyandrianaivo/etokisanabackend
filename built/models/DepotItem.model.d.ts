import { Schema } from "mongoose";
export interface IDepotItem {
    currentDepotId: string;
    productId: string;
    stock: number;
    prix: number;
    lastUpdate: Date;
}
export declare const DepotItemSchema: Schema<IDepotItem, import("mongoose").Model<IDepotItem, any, any, any, import("mongoose").Document<unknown, any, IDepotItem> & IDepotItem & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IDepotItem, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IDepotItem>> & import("mongoose").FlatRecord<IDepotItem> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const DepotItemModel: import("mongoose").Model<IDepotItem, {}, {}, {}, import("mongoose").Document<unknown, {}, IDepotItem> & IDepotItem & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
