import { Schema, model } from "mongoose";
export const UserSchema = new Schema({
    userName: { type: String },
    userFirstname: { type: String, required: true },
    userPassword: { type: String, required: true },
    userEmail: { type: String, required: true, unique: true },
    userPhone: { type: String, required: true },
    userType: { type: String, required: true },
    userTotalSolde: { type: Number },
    userAccess: { type: String, required: true },
    userParainID: { type: String },
    userValidated: { type: Boolean },
    userEmailVerified: { type: Boolean },
    userMainLat: { type: Number },
    userMainLng: { type: Number },
    userID: { type: String, required: true, unique: true },
    userImage: { type: String },
    userDateOfBirth: { type: Date },
    identityCardNumber: { type: String },
    identityFile: { type: String },
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