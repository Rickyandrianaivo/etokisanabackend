import { Schema,model } from "mongoose";

export  interface ILigneBL{
    CodeSociete     : string,
    PointDeVente    : string,
    Doc_no          : string,
    NumBL           : string,
    IDLigneCde      : string,
    Referecence     : string,
    Designation     : string,
    QteEntree       : number
}

export const  LigneBLSchema = new Schema<ILigneBL>({
    CodeSociete             : { type : String, required : false},
    PointDeVente            : { type : String, required : false},
    Doc_no                  : { type : String, required : false},
    NumBL                   : { type : String, required : false},
    IDLigneCde              : { type : String, required : false},
    Referecence             : { type : String, required : false},
    Designation             : { type : String, required : false},
    QteEntree               : { type : Number, required : false},
})

export const LigneBLModel = model<ILigneBL>('bonDeLivraisonDetail',LigneBLSchema)