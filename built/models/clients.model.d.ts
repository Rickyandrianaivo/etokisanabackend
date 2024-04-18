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
export interface Clients {
    client_code: string;
    client_raisonSociale: string;
    client_codeFamille: string;
    client_famille: string;
    client_CA_mensuel: number;
    client_CA_annuel: number;
    client_CA_cumul: number;
    client_telephone: string;
    client_grade: string;
    client_matricule: string;
    client_corps: string;
    client_date_dernier_achat: string;
}
export declare const ClientSchema: Schema<Clients, import("mongoose").Model<Clients, any, any, any, import("mongoose").Document<unknown, any, Clients> & Clients & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Clients, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Clients>> & import("mongoose").FlatRecord<Clients> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const ClientModel: import("mongoose").Model<Clients, {}, {}, {}, import("mongoose").Document<unknown, {}, Clients> & Clients & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
