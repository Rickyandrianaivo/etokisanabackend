"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventaireDetailModel = exports.InventaireDetailSchema = void 0;
var mongoose_1 = require("mongoose");
exports.InventaireDetailSchema = new mongoose_1.Schema({
    article: { type: mongoose_1.Schema.Types.ObjectId, ref: "article", required: true },
    stockTheorique: { type: Number, required: true },
    valeurStockTheorique: { type: Number, required: true },
    stockPhysique: { type: Number, required: true },
    nouvelleValeurStock: { type: Number, required: true },
    ecart: { type: Number, required: true },
    valeurEcart: { type: Number, required: true },
    inventaireNumDoc: { type: String, required: true }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.InventaireDetailModel = (0, mongoose_1.model)('inventaireDetail', exports.InventaireDetailSchema);
