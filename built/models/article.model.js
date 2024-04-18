"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModel = exports.ArticleSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ArticleSchema = new mongoose_1.Schema({
    codeSociete: { type: String, required: true },
    depot: { type: String, required: true },
    categorie: { type: String, required: true },
    reference: { type: String, required: true },
    designation: { type: String, required: true },
    qteEnStock: { type: Number, required: true },
    unite: { type: String, required: true },
    prixUnitaireAchatTTC: { type: Number, required: true },
    prixUnitaireVenteTTC: { type: Number, required: true },
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.ArticleModel = (0, mongoose_1.model)('article', exports.ArticleSchema);
//# sourceMappingURL=article.model.js.map