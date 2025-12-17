"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = exports.CategorySchema = void 0;
const mongoose_1 = require("mongoose");
exports.CategorySchema = new mongoose_1.Schema({
    CatMiniatureUrl: { type: String },
    CatName: { type: String, required: true },
    CatDescription: { type: String }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.CategoryModel = (0, mongoose_1.model)('category', exports.CategorySchema);
//# sourceMappingURL=category.model.js.map