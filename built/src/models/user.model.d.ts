import { Schema } from "mongoose";
export interface User {
    userName: string;
    userFirstname: string;
    userPassword: string;
    userEmail: string;
    userPhone: string;
    userDescritpion: string;
    userGender: string;
    userImage: string;
    userEnabled: boolean;
    userDateOfBirth: Date;
    userTotalSolde: number;
    userLogo: string;
    userStatut: string;
    userManager: string;
    userNif: string;
    userRC: string;
    identityDocumentType: string;
    identityCardNumber: string;
    userAdmin: boolean;
    userAddress: string;
    userIdentityCode: string;
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