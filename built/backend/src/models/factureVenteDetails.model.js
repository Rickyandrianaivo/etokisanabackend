"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactureVenteDetailsModel = exports.FactureVenteDetailsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.FactureVenteDetailsSchema = new mongoose_1.Schema({
    pointDeVente: { type: mongoose_1.Schema.Types.ObjectId, ref: "pointDeVente", required: true },
    article: { type: mongoose_1.Schema.Types.ObjectId, ref: 'article', required: true },
    quantite: { type: Number, required: true },
    prixVenteTTC: { type: Number, required: true },
    remise: { type: Number, required: true },
    montantNetTTC: { type: Number, required: true },
    factureVenteNumDoc: { type: String, required: true }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.FactureVenteDetailsModel = (0, mongoose_1.model)('factureVenteDetail', exports.FactureVenteDetailsSchema);
