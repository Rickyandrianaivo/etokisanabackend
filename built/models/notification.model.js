import { model, Schema } from "mongoose";
export const NotificationSchema = new Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String },
    state: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const NotificationModel = model('notification', NotificationSchema);
//# sourceMappingURL=notification.model.js.map