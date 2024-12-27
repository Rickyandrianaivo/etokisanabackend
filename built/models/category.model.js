import { model, Schema } from "mongoose";
export const CategorySchema = new Schema({
    CatName: { type: String, required: true }
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