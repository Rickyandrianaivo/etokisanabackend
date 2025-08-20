import mongoose from "mongoose";
export interface ITransaction {
    _id: string;
    userId: string;
    siteDepartId: string;
    siteArriveId: string;
    typeES: string;
    montantTotal: number;
    statut: string;
    productList: [object];
}
export declare const TransactionSchema: mongoose.Schema<ITransaction, mongoose.Model<ITransaction, any, any, any, mongoose.Document<unknown, any, ITransaction> & ITransaction & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ITransaction, mongoose.Document<unknown, {}, mongoose.FlatRecord<ITransaction>> & mongoose.FlatRecord<ITransaction> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
export declare const TransactionModel: mongoose.Model<ITransaction, {}, {}, {}, mongoose.Document<unknown, {}, ITransaction> & ITransaction & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
