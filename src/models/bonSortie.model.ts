import { Date, Schema, SchemaType, Types, model } from "mongoose"
import { BonSortiesDetails, BonSortiesDetailsSchema } from "./bonSortieDetails.model";


export interface BonSorties {
    id                  : string,
    numeroDocument      : string;
    date                : Date;
    typeDocument        : string;
    codeSociete         : string;
    depot               : string;
    valide              : boolean;
}

export const BonSortiesSchema = new Schema<BonSorties>(
    {
        numeroDocument      : { type : String, required : true},
        date                : { type : Date, required : true},
        typeDocument        : { type : String, default : "Entrée"},
        codeSociete         : { type : String, required : true},
        depot               : { type : String},
        valide              : { type : Boolean, default : false},
    },{
        timestamps : true,
        toJSON : {
            virtuals: true
        },
        toObject : {
            virtuals : true
        }
    }
)

export const BonSortiesModel = model<BonSorties>('bonSorties',BonSortiesSchema)