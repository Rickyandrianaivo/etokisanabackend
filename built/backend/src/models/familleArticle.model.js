"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilleModel = exports.FamilleArticleSchema = void 0;
var mongoose_1 = require("mongoose");
;
exports.FamilleArticleSchema = new mongoose_1.Schema({
    famille: { type: String, required: true }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.FamilleModel = (0, mongoose_1.model)('famille', exports.FamilleArticleSchema);
