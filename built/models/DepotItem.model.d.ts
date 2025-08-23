import { Schema } from "mongoose";
export interface IDepotItem {
    productId: string;
    stock: number;
    prix: number;
    lastUpdate: Date;
    currentDepotId: string;
}
export declare const DepotItemSchema: Schema<IDepotItem, import("mongoose").Model<IDepotItem, any, any, any, import("mongoose").Document<unknown, any, IDepotItem, any, {}> & IDepotItem & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IDepotItem, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IDepotItem>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IDepotItem> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const DepotItemModel: import("mongoose").Model<IDepotItem, {}, {}, {}, import("mongoose").Document<unknown, {}, IDepotItem, {}, {}> & IDepotItem & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
