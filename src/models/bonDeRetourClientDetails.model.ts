import { Schema, model } from "mongoose";

export interface IBonDeRetourClientDetails {
    CodeSociete     : string,
    PointDeVente    : string,
    Doc_no          : string,
    NumBL           : string,
    IDLigneCde      : number,
    Reference       : string,
    Designation     : string,
    QteEntree       : number
}

export const BonDeRetourClientDetails = new Schema<IBonDeRetourClientDetails>({
    CodeSociete     : {type : String, required : false},
    PointDeVente    : {type : String, required : false},
    Doc_no          : {type : String, required : false},
    NumBL           : {type : String, required : false},
    IDLigneCde      : {type : Number, required : false},
    Reference       : {type : String, required : false},
    Designation     : {type : String, required : false},
    QteEntree       : {type : Number, required : false}
},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
    timestamps:true
})

export const BonDeRetourClientDetailsModel = model<IBonDeRetourClientDetails>('bonDeRetourClientDetails',BonDeRetourClientDetails)