import { Schema } from "mongoose";
export const NotificationSchema = new Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String },
    states: { type: String, required: true },
});
//# sourceMappingURL=notification.model.js.map