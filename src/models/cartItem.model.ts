import { Schema } from "mongoose";
import { Article, ArticleSchema } from "./article.models";

export interface CartItem{
    article : Article
    quantity: number;
    montant : number;
}

export const CartItemSchema = new Schema<CartItem>({
    article : {type : ArticleSchema, required : true},
    quantity : { type : Number, required : true},
    montant : { type : Number, required : true}
})