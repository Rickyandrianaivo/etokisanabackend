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
export interface Fournisseurs {
    fournisseur_code: string;
    fournisseur_raisonSociale: string;
    fournisseur_codeFamille: string;
    fournisseur_famille: string;
    fournisseur_CA_mensuel: number;
    fournisseur_CA_annuel: number;
    fournisseur_CA_cumul: number;
    fournisseur_date_dernier_achat: string;
}
export declare const FournisseurSchema: Schema<Fournisseurs, import("mongoose").Model<Fournisseurs, any, any, any, import("mongoose").Document<unknown, any, Fournisseurs> & Fournisseurs & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Fournisseurs, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Fournisseurs>> & import("mongoose").FlatRecord<Fournisseurs> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const FournisseurModel: import("mongoose").Model<Fournisseurs, {}, {}, {}, import("mongoose").Document<unknown, {}, Fournisseurs> & Fournisseurs & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
