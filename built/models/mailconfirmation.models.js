"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailConfirmationModel = exports.EmailConfirmationSchema = void 0;
const mongoose_1 = require("mongoose");
exports.EmailConfirmationSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, unique: true },
    userToken: { type: String, required: true, unique: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.EmailConfirmationModel = (0, mongoose_1.model)('user', exports.EmailConfirmationSchema);
//# sourceMappingURL=mailconfirmation.models.js.map