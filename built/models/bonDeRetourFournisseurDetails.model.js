"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonDeRetourFournisseurDetailsModel = exports.BonDeRetourFournisseurDetailsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.BonDeRetourFournisseurDetailsSchema = new mongoose_1.Schema({
    Codesociete: { type: String, required: false },
    PointDeVente: { type: String, required: false },
    Depot: { type: String, required: false },
    Doc_no: { type: String, required: false },
    NumLigne: { type: Number, required: false },
    TypeMvt: { type: String, required: false },
    DateEntree: { type: Date, required: false },
    Referecence: { type: String, required: false },
    Designation: { type: String, required: false },
    Unite: { type: String, required: false },
    QteEntreeCarton: { type: Number, required: false },
    QteCommandee: { type: Number, required: false },
    Qtelivree: { type: Number, required: false },
    DatePreremption: { type: Date, required: false },
    PUAchatTTC: { type: Number, required: false },
    PUAchatHT: { type: Number, required: false },
    TotalHT: { type: Number, required: false },
    MontantNetHT: { type: Number, required: false },
    Marge: { type: Number, required: false },
    PrixDeVente: { type: Number, required: false },
    TVA: { type: Number, required: false },
    Observations: { type: String, required: false },
    NumFournisseur: { type: String, required: false },
    NomFournisseur: { type: String, required: false },
    NumPieceFsr: { type: String, required: false },
    ReferenceFournisseur: { type: String, required: false },
    PaysDeProvenance: { type: String, required: false },
    SaisiPar: { type: String, required: false },
    SaisiLe: { type: Date, required: false },
    Vérouillé: { type: Boolean, required: false },
    NumBR: { type: String, required: false },
    NumBC: { type: String, required: false },
    TypeDocument: { type: String, required: false },
    Doc_noReference1: { type: String, required: false },
    Remise: { type: Number, required: false },
    RemiseMontant: { type: Number, required: false },
    ReferenceDateEntree: { type: String, required: false }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.BonDeRetourFournisseurDetailsModel = (0, mongoose_1.model)('bonDeRetourFournisseurDetail', exports.BonDeRetourFournisseurDetailsSchema);
//# sourceMappingURL=bonDeRetourFournisseurDetails.model.js.map