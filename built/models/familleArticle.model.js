import { Schema, model } from "mongoose";
;
export const FamilleArticleSchema = new Schema({
    famille: { type: String, required: true }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const FamilleModel = model('famille', FamilleArticleSchema);
//# sourceMappingURL=familleArticle.model.js.map