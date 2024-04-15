/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Date, Schema, Types } from "mongoose";
export interface BonSorties {
    id: string;
    numeroDocument: string;
    date: Date;
    typeDocument: string;
    codeSociete: string;
    depot: string;
    valide: boolean;
}
export declare const BonSortiesSchema: Schema<BonSorties, import("mongoose").Model<BonSorties, any, any, any, import("mongoose").Document<unknown, any, BonSorties> & BonSorties & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BonSorties, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<BonSorties>> & import("mongoose").FlatRecord<BonSorties> & {
    _id: Types.ObjectId;
}>;
export declare const BonSortiesModel: import("mongoose").Model<BonSorties, {}, {}, {}, import("mongoose").Document<unknown, {}, BonSorties> & BonSorties & {
    _id: Types.ObjectId;
}, any>;
