"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemSchema = void 0;
var mongoose_1 = require("mongoose");
var article_model_1 = require("./article.model");
exports.CartItemSchema = new mongoose_1.Schema({
    article: { type: article_model_1.ArticleSchema, required: true },
    quantity: { type: Number, required: true },
    montant: { type: Number, required: true }
});
//# sourceMappingURL=cartItem.model.js.map