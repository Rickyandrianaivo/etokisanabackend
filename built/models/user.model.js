import { Schema, model } from "mongoose";
export const UserSchema = new Schema({
    // _id                     : { type : String},
    userNickName: { type: String },
    userName: { type: String },
    userFirstname: { type: String },
    userPassword: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPhone: { type: String },
    userType: { type: String, required: true },
    userTotalSolde: { type: Number },
    userAccess: { type: String, required: true },
    userParainID: { type: String },
    userAddress: { type: String },
    userValidated: { type: Boolean },
    userEmailVerified: { type: Boolean },
    userMainLat: { type: Number },
    userMainLng: { type: Number },
    userId: { type: String, required: true, unique: true },
    userImage: { type: String },
    userDateOfBirth: { type: Date },
    identityCardNumber: { type: String },
    identityDocument: { type: [String] },
    documentType: { type: String },
    raisonSocial: { type: String },
    nif: { type: String },
    rcs: { type: String },
    type: { type: String },
    managerName: { type: String },
    managerEmail: { type: String },
    logo: { type: String },
    carteStat: { type: String },
    carteFiscal: { type: [String] },
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