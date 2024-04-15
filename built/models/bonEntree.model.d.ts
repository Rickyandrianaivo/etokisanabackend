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
export interface BonEntree {
    numeroDocument: string;
    date: Date;
    typeDocument: string;
    codeSociete: string;
    depot: string;
    valide: boolean;
}
export declare const BonEntreeSchema: Schema<BonEntree, import("mongoose").Model<BonEntree, any, any, any, import("mongoose").Document<unknown, any, BonEntree> & BonEntree & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BonEntree, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<BonEntree>> & import("mongoose").FlatRecord<BonEntree> & {
    _id: Types.ObjectId;
}>;
export declare const BonEntreeModel: import("mongoose").Model<BonEntree, {}, {}, {}, import("mongoose").Document<unknown, {}, BonEntree> & BonEntree & {
    _id: Types.ObjectId;
}, any>;
