import { Schema, model } from "mongoose"

export interface Article{
    // id                  : string,
    codeSociete         : string,
    depot               : string,
    categorie           : string,
    reference           : string,
    designation         : string,
    qteEnStock          : number,
    unite               : string,
    prixUnitaireAchatTTC: number,
    prixUnitaireVenteTTC: number,
    // codeFournisseur     : string,
}

export const ArticleSchema = new Schema<Article>(
    {
        codeSociete             : { type : String, required : true},
        depot                   : { type : String, required : true},
        categorie               : { type : String, required : true},
        reference               : { type : String, required : true},
        designation             : { type : String, required : true},
        qteEnStock              : { type : Number, required : true},
        unite                   : { type : String, required : true},
        prixUnitaireAchatTTC    : { type : Number, required : true},
        prixUnitaireVenteTTC    : { type : Number, required : true},
        // codeFournisseur         : { type : String, required : true},
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
);

export const ArticleModel = model<Article>('article',ArticleSchema);

