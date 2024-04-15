import { Schema, Types, model } from "mongoose";
import { FamilleArticle, FamilleArticleSchema } from "./familleArticle.model";
import { Article, ArticleSchema } from "./article.models";
export interface InventaireDetail{
    // id                      : string,
    article                 : Types.ObjectId,
    stockTheorique          : number,
    valeurStockTheorique    : number,
    stockPhysique           : number,
    nouvelleValeurStock     : number,
    ecart                   : number,
    valeurEcart             : number,
    inventaireNumDoc        : string
}
export const InventaireDetailSchema = new Schema<InventaireDetail>({
    article                 : { type : Schema.Types.ObjectId , ref : "article",required : true},
    stockTheorique          : { type : Number, required : true},
    valeurStockTheorique    : { type : Number, required : true},
    stockPhysique           : { type : Number, required : true},
    nouvelleValeurStock     : { type : Number, required : true},
    ecart                   : { type : Number, required : true},
    valeurEcart             : { type : Number, required : true},
    inventaireNumDoc        : { type : String, required : true}
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
});

export const InventaireDetailModel = model<InventaireDetail>('inventaireDetail',InventaireDetailSchema);