import { model, Schema } from "mongoose";
export const SiteSchema = new Schema({
    siteName: { type: String },
    siteAddress: { type: String },
    siteLat: { type: Number },
    siteLng: { type: Number },
    siteUserId: { type: String },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const SiteModel = model("site", SiteSchema);
//# sourceMappingURL=site.model.js.map