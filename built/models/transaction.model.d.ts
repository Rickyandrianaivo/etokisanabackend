import mongoose from "mongoose";
export interface ITransaction {
    userId: string;
    siteDepartId: string;
    siteArriveId: string;
    typeES: string;
    montantTotal: number;
    statut: string;
    productList: [object];
}
export declare const TransactionSchema: mongoose.Schema<ITransaction, mongoose.Model<ITransaction, any, any, any, mongoose.Document<unknown, any, ITransaction, any, {}> & ITransaction & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ITransaction, mongoose.Document<unknown, {}, mongoose.FlatRecord<ITransaction>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<ITransaction> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const TransactionModel: mongoose.Model<ITransaction, {}, {}, {}, mongoose.Document<unknown, {}, ITransaction, {}, {}> & ITransaction & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
