import { Schema } from "mongoose";
export interface IJournal {
    userId: string;
    codeProduit: string;
    destination: string;
    valeur: number;
    productId: string;
}
export declare const JournalSchema: Schema<IJournal, import("mongoose").Model<IJournal, any, any, any, import("mongoose").Document<unknown, any, IJournal, any, {}> & IJournal & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IJournal, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IJournal>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IJournal> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const JournalModel: import("mongoose").Model<IJournal, {}, {}, {}, import("mongoose").Document<unknown, {}, IJournal, {}, {}> & IJournal & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
