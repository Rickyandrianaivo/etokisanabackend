import { Schema, model } from "mongoose";

export interface IAchatDetails{
    Doc_no : string,
    Codesociete : string,
    NumLigne : number,
    Depot : string,
    TypeMvt : string,
    DateEntree : Date,
    Referecence : string,
    Designation : string,
    Unite : string,
    QteCommandee : number,
    Qtelivree : number,
    DatePreremption : Date,
    PUAchatTTc : number,
    MontantNetTTC : number,
    Marge : number,
    PrixDeVente : number,
    TVA : number,
    Observations : string,
    NumFournisseur : string,
    NomFournisseur: string,
    NumPieceFsr : string,
    ReferenceFournisseur : string,
    PaysDeProvenance : string,
    SaisiPar : string,
    SaisiLe : Date,
    Vérouillé : boolean,
    NumBr : string,
    TypeDocument : string,
    Doc_noReference1 : string,
    Remise : number,
    RemiseMontant : number ,
    ReferenceDateEntree : string,
    Famille : string,
    SousFamille : string
}

export const AchatDetailSchema  = new Schema<IAchatDetails>({
    Doc_no                  : { type : String , required : false },
    Codesociete             : { type : String , required : false },
    NumLigne                : { type : Number , required : false },
    Depot                   : { type : String , required : false },
    TypeMvt                 : { type : String , required : false },
    DateEntree              : { type : Date , required : false },
    Referecence             : { type : String , required : false },
    Designation             : { type : String , required : false },
    Unite                   : { type : String , required : false },
    QteCommandee            : { type : Number , required : false },
    Qtelivree               : { type : Number , required : false },
    DatePreremption         : { type : Date , required : false },
    PUAchatTTc              : { type : Number , required : false },
    MontantNetTTC           : { type : Number , required : false },
    Marge                   : { type : Number , required : false },
    PrixDeVente             : { type : Number , required : false },
    TVA                     : { type : Number , required : false },
    Observations            : { type : String , required : false },
    NumFournisseur          : { type : String , required : false },
    NomFournisseur          : { type : String , required : false },
    NumPieceFsr             : { type : String , required : false },
    ReferenceFournisseur    : { type : String , required : false },
    PaysDeProvenance        : { type : String , required : false },
    SaisiPar                : { type : String , required : false },
    SaisiLe                 : { type : Date , required : false },
    Vérouillé               : { type : Boolean , required : false },
    NumBr                   : { type : String , required : false },
    TypeDocument            : { type : String , required : false },
    Doc_noReference1        : { type : String , required : false },
    Remise                  : { type : Number , required : false },
    RemiseMontant           : { type : Number , required : false },
    ReferenceDateEntree     : { type : String , required : false },
    Famille                 : { type : String , required : false },
    SousFamille             : { type : String , required : false }
},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
    timestamps:true
})

export const AchatsDetailsModel = model<IAchatDetails>('achatsDetail',AchatDetailSchema)