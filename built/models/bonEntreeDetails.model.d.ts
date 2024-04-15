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
import { Schema, Types } from "mongoose";
export interface BonEntreeDetails {
    article: Types.ObjectId;
    quantiteCommande: number;
    quantiteEntree: number;
    montantNetHT: number;
    montantTVA: number;
    montantNetTTC: number;
    bonEntreeNumDoc: string;
}
export declare const BonEntreeDetailsSchema: Schema<BonEntreeDetails, import("mongoose").Model<BonEntreeDetails, any, any, any, import("mongoose").Document<unknown, any, BonEntreeDetails> & BonEntreeDetails & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BonEntreeDetails, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<BonEntreeDetails>> & import("mongoose").FlatRecord<BonEntreeDetails> & {
    _id: Types.ObjectId;
}>;
export declare const BonEntreeDetailsModel: import("mongoose").Model<BonEntreeDetails, {}, {}, {}, import("mongoose").Document<unknown, {}, BonEntreeDetails> & BonEntreeDetails & {
    _id: Types.ObjectId;
}, any>;
