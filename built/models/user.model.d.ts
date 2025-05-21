import { Schema } from "mongoose";
export interface User {
    userName: string;
    userFirstname: string;
    userPassword: string;
    userEmail: string;
    userPhone: string;
    userType: string;
    userTotalSolde: number;
    userAccess: string;
    userParainID: string;
    userValidated: boolean;
    userEmailVerified: boolean;
    userDateOfBirth: Date;
    userAddress: string;
    userMainLat: number;
    userMainLng: number;
    userId: string;
    userImage: string;
    identityCardNumber: string;
    identityDocument: string;
    documentType: string;
    raisonSocial: string;
    type: string;
    rcs: string;
    carteStat: string;
    nif: string;
    carteFiscal: string;
    logo: string;
    managerName: string;
    managerEmail: string;
}
export declare const UserSchema: Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const UserModel: import("mongoose").Model<User, {}, {}, {}, import("mongoose").Document<unknown, {}, User> & User & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
