import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';
import { BCRYPT_SALT } from "../Utils/constant/constant.js";
export const UserSchema = new Schema({
    // _id                     : { type : String},
    userNickName: { type: String },
    userName: { type: String },
    userFirstname: { type: String },
    userPassword: { type: String, required: true },
    userEmail: { type: String, required: true, unique: true },
    userPhone: { type: String },
    userType: { type: String, required: true },
    userTotalSolde: { type: Number },
    userAccess: { type: String, required: true },
    // userparrainID            : { type : String},
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
    parrain1ID: { type: String },
    parrain2ID: { type: String },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
UserSchema.pre('save', async function (next) {
    if (!this.isModified('userPassword'))
        return next();
    this.userPassword = await bcrypt.hash(this.userPassword, BCRYPT_SALT);
    next();
});
// Comparaison du mot de passe
UserSchema.methods.comparePassword = async function (pw) {
    return bcrypt.compare(pw, this.password);
};
export const UserModel = model('user', UserSchema);
//# sourceMappingURL=user.model.js.map