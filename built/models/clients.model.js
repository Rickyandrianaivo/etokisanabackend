"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModel = exports.ClientSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ClientSchema = new mongoose_1.Schema({
    client_code: { type: String, required: true },
    client_raisonSociale: { type: String, required: true },
    client_codeFamille: { type: String, required: false },
    client_famille: { type: String, required: false },
    client_CA_mensuel: { type: Number, required: false },
    client_CA_annuel: { type: Number, required: false },
    client_CA_cumul: { type: Number, required: false },
    client_telephone: { type: String, required: false },
    client_grade: { type: String, required: false },
    client_matricule: { type: String, required: false },
    client_corps: { type: String, required: false },
    client_date_dernier_achat: { type: String, required: false },
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.ClientModel = (0, mongoose_1.model)('client', exports.ClientSchema);
//# sourceMappingURL=clients.model.js.map