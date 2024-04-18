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
export interface IBonDeReceptionDetails {
    Codesociete: string;
    PointDeVente: string;
    Depot: string;
    Doc_no: string;
    NumLigne: number;
    TypeMvt: string;
    DateEntree: Date;
    Referecence: string;
    Designation: string;
    Unite: string;
    QteEntreeCarton: number;
    QteCommandee: number;
    Qtelivree: number;
    DatePreremption: Date;
    PUAchatTTC: number;
    PUAchatHT: number;
    TotalHT: number;
    MontantNetHT: number;
    Marge: number;
    PrixDeVente: number;
    TVA: number;
    Observations: string;
    NumFournisseur: string;
    NomFournisseur: string;
    NumPieceFsr: string;
    ReferenceFournisseur: string;
    PaysDeProvenance: string;
    SaisiPar: string;
    SaisiLe: Date;
    Vérouillé: boolean;
    NumBR: string;
    NumBC: string;
    TypeDocument: string;
    Doc_noReference1: string;
    Remise: number;
    RemiseMontant: number;
    ReferenceDateEntree: string;
    Famille: string;
    SousFamille: string;
}
export declare const BonDeReceptionDetailsSchema: Schema<IBonDeReceptionDetails, import("mongoose").Model<IBonDeReceptionDetails, any, any, any, import("mongoose").Document<unknown, any, IBonDeReceptionDetails> & IBonDeReceptionDetails & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IBonDeReceptionDetails, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IBonDeReceptionDetails>> & import("mongoose").FlatRecord<IBonDeReceptionDetails> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const BonDeRecetpionDetailsModel: import("mongoose").Model<IBonDeReceptionDetails, {}, {}, {}, import("mongoose").Document<unknown, {}, IBonDeReceptionDetails> & IBonDeReceptionDetails & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
