"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LigneBLModel = exports.LigneBLSchema = void 0;
var mongoose_1 = require("mongoose");
exports.LigneBLSchema = new mongoose_1.Schema({
    CodeSociete: { type: String, required: false },
    PointDeVente: { type: String, required: false },
    Doc_no: { type: String, required: false },
    NumBL: { type: String, required: false },
    IDLigneCde: { type: String, required: false },
    Referecence: { type: String, required: false },
    Designation: { type: String, required: false },
    QteEntree: { type: Number, required: false },
});
exports.LigneBLModel = (0, mongoose_1.model)('bonDeLivraisonDetail', exports.LigneBLSchema);
//# sourceMappingURL=ligneBL.model.js.map