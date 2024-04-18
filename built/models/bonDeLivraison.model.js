"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonDeLivraisonModel = exports.BonDeLivraisonSchema = void 0;
var mongoose_1 = require("mongoose");
exports.BonDeLivraisonSchema = new mongoose_1.Schema({
    CodeSociete: { type: String, required: false },
    PointDeVente: { type: String, required: false },
    Doc_no: { type: String, required: false },
    NumBL: { type: String, required: false },
    DateBL: { type: Date, required: false },
    NumClient: { type: String, required: false },
    DateLivraison: { type: Date, required: false },
    IDAdresseLivraison: { type: Number, required: false },
    IDModeLivraison: { type: Number, required: false },
    TotalHT: { type: Number, required: false },
    TotalTVA: { type: Number, required: false },
    TotalTTC: { type: Number, required: false },
    SaisiPar: { type: String, required: false },
    SaisiLe: { type: Date, required: false },
    Observation: { type: String, required: false },
    NumBC: { type: String, required: false },
});
exports.BonDeLivraisonModel = (0, mongoose_1.model)('bonDeLivraison', exports.BonDeLivraisonSchema);
//# sourceMappingURL=bonDeLivraison.model.js.map