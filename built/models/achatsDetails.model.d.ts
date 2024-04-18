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
export interface IAchatDetails {
    Doc_no: string;
    Codesociete: string;
    NumLigne: number;
    Depot: string;
    TypeMvt: string;
    DateEntree: Date;
    Referecence: string;
    Designation: string;
    Unite: string;
    QteCommandee: number;
    Qtelivree: number;
    DatePreremption: Date;
    PUAchatTTc: number;
    MontantNetTTC: number;
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
    NumBr: string;
    TypeDocument: string;
    Doc_noReference1: string;
    Remise: number;
    RemiseMontant: number;
    ReferenceDateEntree: string;
    Famille: string;
    SousFamille: string;
}
export declare const AchatDetailSchema: Schema<IAchatDetails, import("mongoose").Model<IAchatDetails, any, any, any, import("mongoose").Document<unknown, any, IAchatDetails> & IAchatDetails & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IAchatDetails, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IAchatDetails>> & import("mongoose").FlatRecord<IAchatDetails> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const AchatsDetailsModel: import("mongoose").Model<IAchatDetails, {}, {}, {}, import("mongoose").Document<unknown, {}, IAchatDetails> & IAchatDetails & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
