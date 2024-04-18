import { Schema, model } from "mongoose";

export interface User{
    // id              : string,
    email           : string,
    password        : string,
    name            : string,
    phoneNumber     : string;
    securityLevel   : string;
}

export const UserSchema = new Schema<User>({
    email           : {type : String},
    password        : {type : String, required : true},
    name            : {type : String, required : true},
    phoneNumber     : {type : String, required : true},
    securityLevel   : {type : String, required : true},
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
});

export const UserModel = model<User>('user',UserSchema)