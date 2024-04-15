import { Schema } from "mongoose";
import { ArticleSchema } from "./article.models";
export const CartItemSchema = new Schema({
    article: { type: ArticleSchema, required: true },
    quantity: { type: Number, required: true },
    montant: { type: Number, required: true }
});
//# sourceMappingURL=cartItem.model.js.map