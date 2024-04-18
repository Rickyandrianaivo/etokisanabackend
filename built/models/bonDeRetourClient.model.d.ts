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
export interface IBonDeRetourClient {
    CodeSociete: string;
    PointDeVente: string;
    Doc_no: string;
    NumBL: string;
    DateBL: Date;
    NumClient: string;
    IDAdresseLivraison: number;
    IDModeLivraison: number;
    TotalHT: number;
    TotalTVA: number;
    TotalTTC: number;
    SaisiPar: string;
    SaisiLe: Date;
    Observation: string;
    NumBC: string;
}
export declare const BonDeRetourClientSchema: Schema<IBonDeRetourClient, import("mongoose").Model<IBonDeRetourClient, any, any, any, import("mongoose").Document<unknown, any, IBonDeRetourClient> & IBonDeRetourClient & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IBonDeRetourClient, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IBonDeRetourClient>> & import("mongoose").FlatRecord<IBonDeRetourClient> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const BonDeRetourClientModel: import("mongoose").Model<IBonDeRetourClient, {}, {}, {}, import("mongoose").Document<unknown, {}, IBonDeRetourClient> & IBonDeRetourClient & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
