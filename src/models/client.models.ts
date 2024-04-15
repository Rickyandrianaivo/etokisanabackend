import { Schema, model } from "mongoose";

export interface Client{
    id          : string,
    numeroClient: string,
    name        : string,
    phoneNumber : string;
}

export const ClientSchema = new Schema<Client>({
    numeroClient:{ type : String, required : true},
    name        : {type : String, required : true},
    phoneNumber : {type : String, required : true},
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
});

export const ClientModel = model<Client>('client',ClientSchema)