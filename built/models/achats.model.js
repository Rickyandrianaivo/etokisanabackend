"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchatsModel = exports.AchatsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.AchatsSchema = new mongoose_1.Schema({
    Doc_no: { type: String, required: false },
    CodeSociete: { type: String, required: false },
    Depot: { type: String, required: false },
    DateBR: { type: Date, required: false },
    NumBr: { type: String, required: false },
    NumFournisseur: { type: String, required: false },
    NomFournisseur: { type: String, required: false },
    MontantHT: { type: Number, required: false },
    MontantTVA: { type: Number, required: false },
    MontantBR: { type: Number, required: false },
    NumFacFsr: { type: String, required: false },
    DateFacFsr: { type: Date, required: false },
    TypeDocument: { type: String, required: false },
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.AchatsModel = (0, mongoose_1.model)('achat', exports.AchatsSchema);
//# sourceMappingURL=achats.model.js.map