import { Schema, model } from "mongoose";
export const ClientSchema = new Schema({
    numeroClient: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const ClientModel = model('client', ClientSchema);
//# sourceMappingURL=client.models.js.map