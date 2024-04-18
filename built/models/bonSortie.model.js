"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonSortiesModel = exports.BonSortiesSchema = void 0;
var mongoose_1 = require("mongoose");
exports.BonSortiesSchema = new mongoose_1.Schema({
    numeroDocument: { type: String, required: true },
    date: { type: Date, required: true },
    typeDocument: { type: String, default: "Entrée" },
    codeSociete: { type: String, required: true },
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
exports.BonSortiesModel = (0, mongoose_1.model)('bonSorties', exports.BonSortiesSchema);
//# sourceMappingURL=bonSortie.model.js.map