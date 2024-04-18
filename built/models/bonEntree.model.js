"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonEntreeModel = exports.BonEntreeSchema = void 0;
var mongoose_1 = require("mongoose");
exports.BonEntreeSchema = new mongoose_1.Schema({
    numeroDocument: { type: String },
    date: { type: Date },
    typeDocument: { type: String, default: "Entrée" },
    codeSociete: { type: String },
    depot: { type: String },
    valide: { type: Boolean, default: false },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.BonEntreeModel = (0, mongoose_1.model)('bonEntree', exports.BonEntreeSchema);
//# sourceMappingURL=bonEntree.model.js.map