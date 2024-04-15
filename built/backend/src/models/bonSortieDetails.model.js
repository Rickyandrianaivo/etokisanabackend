"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonSortiesDetailsModel = exports.BonSortiesDetailsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.BonSortiesDetailsSchema = new mongoose_1.Schema({
    article: { type: mongoose_1.Schema.Types.ObjectId, ref: 'article', required: true },
    quantiteCommande: { type: Number, required: true },
    quantiteSortie: { type: Number, required: true },
    prixUnitaireVenteHT: { type: Number, required: true },
    montantNetHT: { type: Number, required: true },
    montantTVA: { type: Number, required: true },
    montantNetTTC: { type: Number, required: true },
    bonSortieNumDoc: { type: String, required: true }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.BonSortiesDetailsModel = (0, mongoose_1.model)('bonSortiesDetail', exports.BonSortiesDetailsSchema);
