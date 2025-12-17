"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteModel = exports.SiteSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SiteSchema = new mongoose_1.Schema({
    siteName: { type: String },
    siteAddress: { type: String },
    siteLat: { type: Number },
    siteLng: { type: Number },
    siteUserID: { type: String, ref: 'user' },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.SiteModel = (0, mongoose_1.model)("site", exports.SiteSchema);
//# sourceMappingURL=site.model.js.map