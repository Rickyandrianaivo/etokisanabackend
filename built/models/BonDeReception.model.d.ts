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
export interface IBonDeReception {
    CodeSociete: string;
    PointDeVente: string;
    Depot: string;
    Doc_no: string;
    DateBR: Date;
    MontantHT: number;
    MontantTVA: number;
    MontantTTC: number;
    NumBR: string;
    NumFournisseur: string;
    NomFournisseur: string;
    NumFacFsr: string;
    DateFacFsr: Date;
    TypeDocument: string;
}
export declare const BonDeReceptionSchema: Schema<IBonDeReception, import("mongoose").Model<IBonDeReception, any, any, any, import("mongoose").Document<unknown, any, IBonDeReception> & IBonDeReception & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IBonDeReception, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IBonDeReception>> & import("mongoose").FlatRecord<IBonDeReception> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const BonDeReceptionModel: import("mongoose").Model<IBonDeReception, {}, {}, {}, import("mongoose").Document<unknown, {}, IBonDeReception> & IBonDeReception & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
