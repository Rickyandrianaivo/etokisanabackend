import { Date, Schema, SchemaType, Types, model } from "mongoose"
 

export interface BonEntree {
    // id                  : string,
    numeroDocument      : string;
    date                : Date;
    typeDocument        : string;
    codeSociete         : string;
    depot               : string;
    valide              : boolean;
}

export const BonEntreeSchema = new Schema<BonEntree>(
    {
        numeroDocument      : { type : String},
        date                : { type : Date},
        typeDocument        : { type : String, default : "Entrée"},
        codeSociete         : { type : String},
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
export const BonEntreeModel = model<BonEntree>('bonEntree',BonEntreeSchema);