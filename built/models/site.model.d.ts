import { Schema } from "mongoose";
export interface ISite {
    siteName: string;
    siteAddress: string;
    siteLat: number;
    siteLng: number;
    siteUserID: string;
}
export declare const SiteSchema: Schema<ISite, import("mongoose").Model<ISite, any, any, any, import("mongoose").Document<unknown, any, ISite, any, {}> & ISite & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ISite, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ISite>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<ISite> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const SiteModel: import("mongoose").Model<ISite, {}, {}, {}, import("mongoose").Document<unknown, {}, ISite, {}, {}> & ISite & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
