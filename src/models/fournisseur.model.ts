import { Schema, model } from "mongoose";

export interface Fournisseur{
    id              : string,
    codeFournisseur : string,
    name            : string,
    phoneNumber     : string;
    email           : string;
    civilite        : string,
}

export const FournisseurSchema = new Schema<Fournisseur>({
    codeFournisseur     : {type : String, required : true},
    name                : {type : String, required : true},
    phoneNumber         : {type : String, required : true},
    email               : {type : String},
    civilite            : {type : String},
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
});

export const FournisseurModel = model<Fournisseur>('Fournisseur',FournisseurSchema)