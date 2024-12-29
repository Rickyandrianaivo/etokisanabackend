import { Schema, model } from "mongoose";
export const UserSchema = new Schema({
    userName: { type: String },
    userFirstname: { type: String, required: true },
    userPassword: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPhone: { type: String, required: true },
    userDescritpion: { type: String },
    userGender: { type: String },
    userImage: { type: String },
    userEnabled: { type: Boolean, },
    userDateOfBirth: { type: Date },
    userTotalSolde: { type: Number },
    userLogo: { type: String },
    userStatut: { type: String },
    userManager: { type: String },
    userNif: { type: String },
    userRC: { type: String },
    identityDocumentType: { type: String },
    identityCardNumber: { type: String },
    userAddress: { type: String },
    userIdentityCode: { type: String },
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
//# sourceMappingURL=user.model.js.map