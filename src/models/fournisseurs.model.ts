import { Schema, model } from "mongoose"

export interface Fournisseurs{
    // id                  : string,
    fournisseur_code         :string;
    fournisseur_raisonSociale:string;
    fournisseur_codeFamille  :string;
    fournisseur_famille      :string;
    fournisseur_CA_mensuel   :number;
    fournisseur_CA_annuel    :number;
    fournisseur_CA_cumul     :number;
    fournisseur_date_dernier_achat:string;
}

export const FournisseurSchema = new Schema<Fournisseurs>(
    {
        fournisseur_code             : { type : String, required : true},
        fournisseur_raisonSociale    : { type : String, required : true},
        fournisseur_codeFamille      : { type : String, required : false},
        fournisseur_famille          : { type : String, required : false},
        fournisseur_CA_mensuel       : { type : Number, required : false},
        fournisseur_CA_annuel        : { type : Number, required : false},
        fournisseur_CA_cumul         : { type : Number, required : false},
        fournisseur_date_dernier_achat: { type : String, required : false},
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

export const FournisseurModel = model<Fournisseurs>('fournisseur',FournisseurSchema);