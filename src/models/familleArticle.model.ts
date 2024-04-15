import { Schema, model } from "mongoose";

export interface FamilleArticle{
    id      : string,
    famille : string
};
export const FamilleArticleSchema = new Schema<FamilleArticle>({
    famille : {type : String, required : true}
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
});

export const FamilleModel = model<FamilleArticle>('famille',FamilleArticleSchema);