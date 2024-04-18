import { Router } from "express";
import asyncHandler from "express-async-handler";
import { AchatsDetailsModel } from "../models/achatsDetails.model";

const router = Router();

// router.get("/seed",asyncHandler(async(req, res) =>{
//     const AchatsDetailsCount = await AchatsDetailsModel.countDocuments();
//     if(AchatsDetailsCount > 0){
//         res.send("AchatsDetails seed is already done");
//         return;
//     }
//     await AchatsDetailsModel.create(sample_AchatsDetails);
//     res.send("seed is done!");
// }))

router.post("/create",asyncHandler(async(req, res) =>{
        const {
            _id, 
            Doc_no,
            Codesociete,
            NumLigne,
            Depot,
            TypeMvt,
            DateEntree,
            Referecence,
            Designation,
            Unite,
            QteCommandee,
            telivree,
            DatePreremption,
            PUAchatTTc,
            MontantNetTTC,
            Marge,
            PrixDeVente,
            TVA,
            Observations,
            NumFournisseur,
            NomFournisseur,
            NumPieceFsr,
            ReferenceFournisseur,
            PaysDeProvenance,
            SaisiPar,
            SaisiLe,
            Vérouillé,
            NumBr,
            TypeDocument,
            Doc_noReference1,
            Remise,
            RemiseMontant,
            ReferenceDateEntree,
            Famille,
            SousFamille} = req.body;
            const newAchatsDetails = {
                _id,
                Doc_no,
                Codesociete,
                NumLigne,
                Depot,
                TypeMvt,
                DateEntree,
                Referecence,
                Designation,
                Unite,
                QteCommandee,
                telivree,
                DatePreremption,
                PUAchatTTc,
                MontantNetTTC,
                Marge,
                PrixDeVente,
                TVA,
                Observations,
                NumFournisseur,
                NomFournisseur,
                NumPieceFsr,
                ReferenceFournisseur,
                PaysDeProvenance,
                SaisiPar,
                SaisiLe,
                Vérouillé,
                NumBr,
                TypeDocument,
                Doc_noReference1,
                Remise,
                RemiseMontant,
                ReferenceDateEntree,
                Famille,
                SousFamille
            }
    await AchatsDetailsModel.create(newAchatsDetails);
    res.send("AchatDetails créé!");
}))

router.put("/update/:idToUpdate",asyncHandler(async(req, res) =>{
    const {
            _id, 
            Doc_no,
            Codesociete,
            NumLigne,
            Depot,
            TypeMvt,
            DateEntree,
            Referecence,
            Designation,
            Unite,
            QteCommandee,
            telivree,
            DatePreremption,
            PUAchatTTc,
            MontantNetTTC,
            Marge,
            PrixDeVente,
            TVA,
            Observations,
            NumFournisseur,
            NomFournisseur,
            NumPieceFsr,
            ReferenceFournisseur,
            PaysDeProvenance,
            SaisiPar,
            SaisiLe,
            Vérouillé,
            NumBr,
            TypeDocument,
            Doc_noReference1,
            Remise,
            RemiseMontant,
            ReferenceDateEntree,
            Famille,
            SousFamille} = req.body;
    const idToUpdate = req.params['idToUpdate']
    await AchatsDetailsModel.updateOne({_id : idToUpdate},
    {$set : {
            Doc_no,
            Codesociete,
            NumLigne,
            Depot,
            TypeMvt,
            DateEntree,
            Referecence,
            Designation,
            Unite,
            QteCommandee,
            telivree,
            DatePreremption,
            PUAchatTTc,
            MontantNetTTC,
            Marge,
            PrixDeVente,
            TVA,
            Observations,
            NumFournisseur,
            NomFournisseur,
            NumPieceFsr,
            ReferenceFournisseur,
            PaysDeProvenance,
            SaisiPar,
            SaisiLe,
            Vérouillé,
            NumBr,
            TypeDocument,
            Doc_noReference1,
            Remise,
            RemiseMontant,
            ReferenceDateEntree,
            Famille,
            SousFamille
        }
    })
res.send("AchatDetails modifié!");
}))

router.delete("/:idToDelete",asyncHandler(async(req,res)=>{
    const idToDelete = req.params['idToDelete'];
    await AchatsDetailsModel.deleteOne({_id : idToDelete})
}))

router.get("/", asyncHandler(async(req, res) =>{
    const AchatsDetails = await AchatsDetailsModel.find();
    res.send(AchatsDetails);
}))

router.get("/search/:searchTerm",asyncHandler(async(req,res) =>{
    const searchRegex = new RegExp(req.params['searchTerm'], 'i');
    const AchatsDetails = await AchatsDetailsModel.find({designation: {$regex:searchRegex}})
    res.send(AchatsDetails);
}))

router.get("/reference/:reference",asyncHandler(async(req,res) =>{
    const reference = req.params['reference'];
    const AchatsDetails = await AchatsDetailsModel.findOne({reference: reference})
    res.send(AchatsDetails);
}))

router.get("/id/:id",asyncHandler(async(req,res) =>{
    const id = req.params['id'];
    const AchatsDetails = await AchatsDetailsModel.findOne({_id: id})
    res.send(AchatsDetails);
})) 

router.get("/famille/:famille", asyncHandler(async(req,res) =>{
        const AchatsDetails = await AchatsDetailsModel.find({categorie : req.params['famille']})
    res.send(AchatsDetails);
})) 

export default router;