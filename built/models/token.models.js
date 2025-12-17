"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModel = exports.TokenSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TokenSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    token: { type: String, required: true },
    // createdAt            : {type : Date, required : true, default: Date.now,expires:3600},
}, {
    timestamps: true,
    expireAfterSeconds: 3600,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.TokenModel = (0, mongoose_1.model)('token', exports.TokenSchema);
//# sourceMappingURL=token.models.js.map