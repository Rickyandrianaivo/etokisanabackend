"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventaireModel = exports.InventaireSchema = void 0;
var mongoose_1 = require("mongoose");
;
exports.InventaireSchema = new mongoose_1.Schema({
    numeroDocument: { type: String, required: true },
    date: { type: Date, required: true },
    typeDocument: { type: String, required: true },
    depot: { type: String, required: true },
    etatValidation: { type: Boolean, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.InventaireModel = (0, mongoose_1.model)('inventaire', exports.InventaireSchema);
