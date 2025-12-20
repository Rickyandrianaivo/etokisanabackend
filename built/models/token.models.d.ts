import { Schema } from "mongoose";
export interface Token {
    userId: string;
    token: string;
}
export declare const TokenSchema: Schema<Token, import("mongoose").Model<Token, any, any, any, import("mongoose").Document<unknown, any, Token, any, {}> & Token & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Token, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Token>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Token> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const TokenModel: import("mongoose").Model<Token, {}, {}, {}, import("mongoose").Document<unknown, {}, Token, {}, {}> & Token & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
