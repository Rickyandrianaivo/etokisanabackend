import { Schema } from "mongoose";
export interface INotification {
    userId: string;
    title: string;
    message: string;
    states: string;
}
export declare const NotificationSchema: Schema<INotification, import("mongoose").Model<INotification, any, any, any, import("mongoose").Document<unknown, any, INotification, any, {}> & INotification & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, INotification, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<INotification>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<INotification> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const NotificationModel: import("mongoose").Model<INotification, {}, {}, {}, import("mongoose").Document<unknown, {}, INotification, {}, {}> & INotification & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
