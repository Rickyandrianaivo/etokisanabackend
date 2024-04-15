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
import { Schema } from "mongoose";
export interface Inventaire {
    numeroDocument: string;
    date: Date;
    typeDocument: string;
    depot: string;
    etatValidation: boolean;
}
export declare const InventaireSchema: Schema<Inventaire, import("mongoose").Model<Inventaire, any, any, any, import("mongoose").Document<unknown, any, Inventaire> & Inventaire & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Inventaire, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Inventaire>> & import("mongoose").FlatRecord<Inventaire> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const InventaireModel: import("mongoose").Model<Inventaire, {}, {}, {}, import("mongoose").Document<unknown, {}, Inventaire> & Inventaire & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
