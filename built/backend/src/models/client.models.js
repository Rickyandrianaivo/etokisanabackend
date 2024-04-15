"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModel = exports.ClientSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ClientSchema = new mongoose_1.Schema({
    numeroClient: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.ClientModel = (0, mongoose_1.model)('client', exports.ClientSchema);
