"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouvementStockModel = exports.MouvementStockSchema = void 0;
var mongoose_1 = require("mongoose");
exports.MouvementStockSchema = new mongoose_1.Schema({
    numeroLigne: { type: Number, required: true },
    date: { type: Date, required: true },
    article: { type: mongoose_1.Schema.Types.ObjectId, ref: 'article', required: true },
    numeroDocument: { type: String, required: true },
    typeDocument: { type: String, required: true },
    sousTypeDocument: { type: String },
    quantite: { type: Number, required: true },
    valeurDuMouvement: { type: Number, required: true },
    stockReel: { type: Number, required: true },
    valeurStock: { type: Number, required: true },
    depot: { type: String, required: true },
    codeSociete: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true
    }
});
exports.MouvementStockModel = (0, mongoose_1.model)('mouvementStock', exports.MouvementStockSchema);
