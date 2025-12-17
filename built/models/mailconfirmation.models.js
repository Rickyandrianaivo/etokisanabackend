import { Schema, model } from "mongoose";
export const EmailConfirmationSchema = new Schema({
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
export const EmailConfirmationModel = model('user', EmailConfirmationSchema);
//# sourceMappingURL=mailconfirmation.models.js.map