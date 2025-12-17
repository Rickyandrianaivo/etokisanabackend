"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JournalModel = exports.JournalSchema = void 0;
const mongoose_1 = require("mongoose");
exports.JournalSchema = new mongoose_1.Schema({
    userId: { type: String },
    codeProduit: { type: String, required: true },
    destination: { type: String },
    valeur: { type: Number },
    productId: { type: String }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.JournalModel = (0, mongoose_1.model)('category', exports.JournalSchema);
//# sourceMappingURL=journal.model.js.map