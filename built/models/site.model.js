import { model, Schema } from "mongoose";
export const SiteSchema = new Schema({
    SiteName: { type: String },
    SiteAddress: { type: String },
    SiteLat: { type: Number },
    SiteLng: { type: Number },
    SiteUserId: { type: String },
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