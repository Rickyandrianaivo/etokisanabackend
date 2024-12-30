import { Schema } from "mongoose";
export interface ITransaction {
    transactionType: string;
    transactionState: string;
    transactionAmount: number;
    transactionMethode: string;
}
export declare const TransactionSchema: Schema<ITransaction, import("mongoose").Model<ITransaction, any, any, any, import("mongoose").Document<unknown, any, ITransaction> & ITransaction & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ITransaction, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ITransaction>> & import("mongoose").FlatRecord<ITransaction> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const TransactionModel: import("mongoose").Model<ITransaction, {}, {}, {}, import("mongoose").Document<unknown, {}, ITransaction> & ITransaction & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;