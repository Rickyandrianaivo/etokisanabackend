"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonEntreeDetailsModel = exports.BonEntreeDetailsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.BonEntreeDetailsSchema = new mongoose_1.Schema({
    article: { type: mongoose_1.Schema.Types.ObjectId, ref: 'article', required: true },
    quantiteCommande: { type: Number, required: true },
    quantiteEntree: { type: Number, required: true },
    montantNetHT: { type: Number, required: true },
    montantTVA: { type: Number, required: true },
    montantNetTTC: { type: Number, required: true },
    bonEntreeNumDoc: { type: String, required: true }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.BonEntreeDetailsModel = (0, mongoose_1.model)('bonentreedetail', exports.BonEntreeDetailsSchema);
//# sourceMappingURL=bonEntreeDetails.model.js.map