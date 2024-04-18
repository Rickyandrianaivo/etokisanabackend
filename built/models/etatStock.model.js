"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtatStockModel = exports.EtatStockSchema = void 0;
var mongoose_1 = require("mongoose");
var familleArticle_model_1 = require("./familleArticle.model");
exports.EtatStockSchema = new mongoose_1.Schema({
    dateSituation: { type: Date, required: true },
    famille: { type: familleArticle_model_1.FamilleArticleSchema, required: true },
    codeArticle: { type: String, required: true },
    designation: { type: String, required: true },
    quantite: { type: Number, required: true },
    valeurUnitaire: { type: Number, required: true },
    valeurStock: { type: Number, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.EtatStockModel = (0, mongoose_1.model)('etatStock', exports.EtatStockSchema);
//# sourceMappingURL=etatStock.model.js.map