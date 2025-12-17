"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const bcryptjs_1 = tslib_1.__importDefault(require("bcryptjs"));
const constant_js_1 = require("../Utils/constant/constant.js");
exports.UserSchema = new mongoose_1.Schema({
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
exports.UserSchema.pre('save', async function (next) {
    if (!this.isModified('userPassword'))
        return next();
    this.userPassword = await bcryptjs_1.default.hash(this.userPassword, constant_js_1.BCRYPT_SALT);
    next();
});
// Comparaison du mot de passe
exports.UserSchema.methods.comparePassword = async function (pw) {
    return bcryptjs_1.default.compare(pw, this.password);
};
exports.UserModel = (0, mongoose_1.model)('user', exports.UserSchema);
//# sourceMappingURL=user.model.js.map