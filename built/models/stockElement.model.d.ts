import { Schema } from "mongoose";
export interface IstockElement {
    depotId: string;
    productId: string;
    quantity: number;
}
export declare const StockElementSchema: Schema<IstockElement, import("mongoose").Model<IstockElement, any, any, any, import("mongoose").Document<unknown, any, IstockElement, any, {}> & IstockElement & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IstockElement, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IstockElement>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IstockElement> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const StockElementModel: import("mongoose").Model<IstockElement, {}, {}, {}, import("mongoose").Document<unknown, {}, IstockElement, {}, {}> & IstockElement & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
