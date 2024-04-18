"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonDeReceptionModel = exports.BonDeReceptionSchema = void 0;
var mongoose_1 = require("mongoose");
exports.BonDeReceptionSchema = new mongoose_1.Schema({
    CodeSociete: { type: String, required: false },
    PointDeVente: { type: String, required: false },
    Depot: { type: String, required: false },
    Doc_no: { type: String, required: false },
    DateBR: { type: Date, required: false },
    MontantHT: { type: Number, required: false },
    MontantTVA: { type: Number, required: false },
    MontantTTC: { type: Number, required: false },
    NumBR: { type: String, required: false },
    NumFournisseur: { type: String, required: false },
    NomFournisseur: { type: String, required: false },
    NumFacFsr: { type: String, required: false },
    DateFacFsr: { type: Date, required: false },
    TypeDocument: { type: String, required: false }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.BonDeReceptionModel = (0, mongoose_1.model)('bonDeReception', exports.BonDeReceptionSchema);
//# sourceMappingURL=BonDeReception.model.js.map