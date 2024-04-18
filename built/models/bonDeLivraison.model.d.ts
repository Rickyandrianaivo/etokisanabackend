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
export interface IBonDeLivraison {
    CodeSociete: string;
    PointDeVente: string;
    Doc_no: string;
    NumBL: string;
    DateBL: Date;
    NumClient: string;
    DateLivraison: Date;
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
export declare const BonDeLivraisonSchema: Schema<IBonDeLivraison, import("mongoose").Model<IBonDeLivraison, any, any, any, import("mongoose").Document<unknown, any, IBonDeLivraison> & IBonDeLivraison & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IBonDeLivraison, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IBonDeLivraison>> & import("mongoose").FlatRecord<IBonDeLivraison> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const BonDeLivraisonModel: import("mongoose").Model<IBonDeLivraison, {}, {}, {}, import("mongoose").Document<unknown, {}, IBonDeLivraison> & IBonDeLivraison & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
