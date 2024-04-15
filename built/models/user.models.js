import { Schema, model } from "mongoose";
export const UserSchema = new Schema({
    email: { type: String },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    securityLevel: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const UserModel = model('user', UserSchema);
//# sourceMappingURL=user.models.js.map