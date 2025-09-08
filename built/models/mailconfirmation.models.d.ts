import { Schema } from "mongoose";
export interface IEmailConfiamtion {
    userId: string;
    userToken: string;
}
export declare const EmailConfirmationSchema: Schema<IEmailConfiamtion, import("mongoose").Model<IEmailConfiamtion, any, any, any, import("mongoose").Document<unknown, any, IEmailConfiamtion, any, {}> & IEmailConfiamtion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IEmailConfiamtion, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IEmailConfiamtion>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IEmailConfiamtion> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const EmailConfirmationModel: import("mongoose").Model<IEmailConfiamtion, {}, {}, {}, import("mongoose").Document<unknown, {}, IEmailConfiamtion, {}, {}> & IEmailConfiamtion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
