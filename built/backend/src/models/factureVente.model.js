"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactureVenteModel = exports.FactureVenteSchema = void 0;
var mongoose_1 = require("mongoose");
exports.FactureVenteSchema = new mongoose_1.Schema({
    numeroDocument: { type: String, required: true },
    date: { type: Date, required: true },
    numeroClient: { type: String },
    totalHT: { type: Number, required: true },
    totalTVA: { type: Number, required: true },
    totalTTC: { type: Number, required: true },
    montantAcompte: { type: Number, required: true },
    netAPayer: { type: Number, required: true },
    paye: { type: Boolean },
    annule: { type: Boolean },
    depot: { type: String, required: true },
    soldeDu: { type: Number, required: true }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.FactureVenteModel = (0, mongoose_1.model)('factureVente', exports.FactureVenteSchema);
