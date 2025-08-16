import { Schema } from "mongoose";
export interface ITransactionItem {
    transactionProduct: string;
    transactionQuantity: number;
    transactionPrice: number;
    transactionID: string;
}
export declare const TransactionItemSchema: Schema<ITransactionItem, import("mongoose").Model<ITransactionItem, any, any, any, import("mongoose").Document<unknown, any, ITransactionItem, any, {}> & ITransactionItem & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ITransactionItem, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ITransactionItem>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<ITransactionItem> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const TransactionItemModel: import("mongoose").Model<ITransactionItem, {}, {}, {}, import("mongoose").Document<unknown, {}, ITransactionItem, {}, {}> & ITransactionItem & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
