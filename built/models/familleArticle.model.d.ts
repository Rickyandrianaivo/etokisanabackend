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
export interface FamilleArticle {
    id: string;
    famille: string;
}
export declare const FamilleArticleSchema: Schema<FamilleArticle, import("mongoose").Model<FamilleArticle, any, any, any, import("mongoose").Document<unknown, any, FamilleArticle> & FamilleArticle & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FamilleArticle, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FamilleArticle>> & import("mongoose").FlatRecord<FamilleArticle> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const FamilleModel: import("mongoose").Model<FamilleArticle, {}, {}, {}, import("mongoose").Document<unknown, {}, FamilleArticle> & FamilleArticle & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
