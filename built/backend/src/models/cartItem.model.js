"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemSchema = void 0;
var mongoose_1 = require("mongoose");
var article_models_1 = require("./article.models");
exports.CartItemSchema = new mongoose_1.Schema({
    article: { type: article_models_1.ArticleSchema, required: true },
    quantity: { type: Number, required: true },
    montant: { type: Number, required: true }
});
