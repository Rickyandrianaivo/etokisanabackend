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
export interface PointDeVente {
    codeSociete: string;
    codeFournisseur: string;
    nomPV: string;
    emplacement: string;
    ordinateur: string;
    telephone1: string;
    telephone2: string;
    telephone3: string;
    pointDeVenteActif: boolean;
    dateDeVente: Date;
    prefixeVente: string;
    numeroVente: number;
    dateAchat: Date;
    prefixeAchat: string;
    numeroAchat: number;
    dateInventaire: Date;
    prefixeInventaire: string;
    numeroInventaire: number;
    dateBE: Date;
    prefixeBE: string;
    numeroBE: number;
    dateBS: Date;
    prefixeBS: string;
    numeroBS: number;
    dateCloture: Date;
    prefixeCloture: string;
    numeroCloture: number;
    numeroMouvementStock: number;
}
export declare const PointDeVenteSchema: Schema<PointDeVente, import("mongoose").Model<PointDeVente, any, any, any, import("mongoose").Document<unknown, any, PointDeVente> & PointDeVente & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PointDeVente, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PointDeVente>> & import("mongoose").FlatRecord<PointDeVente> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const PointDeVenteModel: import("mongoose").Model<PointDeVente, {}, {}, {}, import("mongoose").Document<unknown, {}, PointDeVente> & PointDeVente & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
