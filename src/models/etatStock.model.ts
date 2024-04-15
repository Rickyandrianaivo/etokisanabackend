import { Schema, model } from 'mongoose';
import { FamilleArticle, FamilleArticleSchema } from './familleArticle.model';


export interface EtatStock {
    id              : string,
    dateSituation   : Date,
    famille         : FamilleArticle,
    codeArticle     : string,
    designation     : string,
    quantite        : number,
    valeurUnitaire  : number,
    valeurStock     : number,
}

export const EtatStockSchema = new Schema<EtatStock>({
    dateSituation   : {type : Date, required : true },
    famille         : { type : FamilleArticleSchema,required : true},
    codeArticle     : { type : String , required : true},
    designation     : { type : String, required : true},
    quantite        : { type : Number , required :true},
    valeurUnitaire  : { type : Number , required :true},
    valeurStock     : { type : Number , required :true},
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
}
)

export const EtatStockModel = model<EtatStock>('etatStock',EtatStockSchema)