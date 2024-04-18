"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FournisseurModel = exports.FournisseurSchema = void 0;
var mongoose_1 = require("mongoose");
exports.FournisseurSchema = new mongoose_1.Schema({
    fournisseur_code: { type: String, required: true },
    fournisseur_raisonSociale: { type: String, required: true },
    fournisseur_codeFamille: { type: String, required: false },
    fournisseur_famille: { type: String, required: false },
    fournisseur_CA_mensuel: { type: Number, required: false },
    fournisseur_CA_annuel: { type: Number, required: false },
    fournisseur_CA_cumul: { type: Number, required: false },
    fournisseur_date_dernier_achat: { type: String, required: false },
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.FournisseurModel = (0, mongoose_1.model)('fournisseur', exports.FournisseurSchema);
//# sourceMappingURL=fournisseurs.model.js.map