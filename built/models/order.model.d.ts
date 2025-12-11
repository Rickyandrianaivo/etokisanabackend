import { Schema } from "mongoose";
export interface IOrder {
    orderType: string;
    orderState: string;
    orderMontant: number;
    orderMethode: string;
}
export declare const orderSchema: Schema<IOrder, import("mongoose").Model<IOrder, any, any, any, import("mongoose").Document<unknown, any, IOrder> & IOrder & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IOrder, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IOrder>> & import("mongoose").FlatRecord<IOrder> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const orderModel: import("mongoose").Model<IOrder, {}, {}, {}, import("mongoose").Document<unknown, {}, IOrder> & IOrder & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
