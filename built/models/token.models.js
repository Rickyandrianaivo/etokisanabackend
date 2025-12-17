import { Schema, model } from "mongoose";
export const TokenSchema = new Schema({
    userId: { type: String, required: true },
    token: { type: String, required: true },
    // createdAt            : {type : Date, required : true, default: Date.now,expires:3600},
}, {
    timestamps: true,
    expireAfterSeconds: 3600,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const TokenModel = model('token', TokenSchema);
//# sourceMappingURL=token.models.js.map