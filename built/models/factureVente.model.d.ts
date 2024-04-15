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
import mongoose, { Types } from "mongoose";
export interface FactureVente {
    id: string;
    numeroDocument: string;
    date: Date;
    numeroClient: string;
    totalHT: number;
    totalTVA: number;
    totalTTC: number;
    montantAcompte: number;
    netAPayer: number;
    paye: boolean;
    annule: boolean;
    depot: string;
    soldeDu: number;
}
export declare const FactureVenteSchema: mongoose.Schema<FactureVente, mongoose.Model<FactureVente, any, any, any, mongoose.Document<unknown, any, FactureVente> & FactureVente & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, FactureVente, mongoose.Document<unknown, {}, mongoose.FlatRecord<FactureVente>> & mongoose.FlatRecord<FactureVente> & {
    _id: Types.ObjectId;
}>;
export declare const FactureVenteModel: mongoose.Model<FactureVente, {}, {}, {}, mongoose.Document<unknown, {}, FactureVente> & FactureVente & {
    _id: Types.ObjectId;
}, any>;
