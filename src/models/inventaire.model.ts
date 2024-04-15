import { Schema, model } from "mongoose";
import { InventaireDetail, InventaireDetailSchema } from "./inventaireDetail.model";

export interface Inventaire{
    // id              : string,
    numeroDocument  : string,
    date            : Date,
    typeDocument    : string,
    depot           : string ,
    etatValidation  : boolean,
};

export const InventaireSchema = new Schema<Inventaire>({
    numeroDocument  : { type : String, required : true},
    date            : { type : Date, required : true},
    typeDocument    : { type : String, required : true},
    depot           : { type : String, required : true},
    etatValidation  : { type : Boolean, required : true},
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
});

export const InventaireModel = model<Inventaire>('inventaire',InventaireSchema);