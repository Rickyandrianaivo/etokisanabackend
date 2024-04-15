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
export interface BonSortiesDetails {
    article: Types.ObjectId;
    quantiteCommande: number;
    quantiteSortie: number;
    prixUnitaireVenteHT: number;
    montantNetHT: number;
    montantTVA: number;
    montantNetTTC: number;
    bonSortieNumDoc: string;
}
export declare const BonSortiesDetailsSchema: Schema<BonSortiesDetails, import("mongoose").Model<BonSortiesDetails, any, any, any, import("mongoose").Document<unknown, any, BonSortiesDetails> & BonSortiesDetails & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BonSortiesDetails, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<BonSortiesDetails>> & import("mongoose").FlatRecord<BonSortiesDetails> & {
    _id: Types.ObjectId;
}>;
export declare const BonSortiesDetailsModel: import("mongoose").Model<BonSortiesDetails, {}, {}, {}, import("mongoose").Document<unknown, {}, BonSortiesDetails> & BonSortiesDetails & {
    _id: Types.ObjectId;
}, any>;
