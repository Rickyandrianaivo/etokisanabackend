import { model, Schema } from "mongoose";
export const NotificationSchema = new Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String },
    states: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const NotificationModel = model('product', NotificationSchema);
//# sourceMappingURL=notification.model.js.map