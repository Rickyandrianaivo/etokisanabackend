"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FournisseurModel = exports.FournisseurSchema = void 0;
var mongoose_1 = require("mongoose");
exports.FournisseurSchema = new mongoose_1.Schema({
    codeFournisseur: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String },
    civilite: { type: String },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.FournisseurModel = (0, mongoose_1.model)('Fournisseur', exports.FournisseurSchema);
//# sourceMappingURL=fournisseur.model.js.map