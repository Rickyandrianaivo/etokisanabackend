import { model, Schema } from "mongoose";
export const CategorySchema = new Schema({
    CatMiniatureUrl: { type: String },
    CatName: { type: String, required: true },
    CatDescription: { type: String }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const CategoryModel = model('category', CategorySchema);
//# sourceMappingURL=category.model.js.map