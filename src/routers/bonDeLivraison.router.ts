import { Router } from "express";
import asyncHandler from "express-async-handler";
import { BonDeLivraisonModel } from "../models/bonDeLivraison.model";

const router = Router();

// router.get("/seed",asyncHandler(async(req, res) =>{
//     const BonDeLivraisonCount = await BonDeLivraisonModel.countDocuments();
//     if(BonDeLivraisonCount > 0){
//         res.send("BonDeLivraison seed is already done");
//         return;
//     }
//     await BonDeLivraisonModel.create(sample_BonDeLivraison);
//     res.send("seed is done!");
// }))

router.post("/create",asyncHandler(async(req, res) =>{
        const {
            _id, 
            Doc_no,
            CodeSociete,
            Depot,
            DateBR,
            NumBr,
            NumFournisseur,
            NomFournisseur,
            MontantHT,
            MontantTVA,
            MontantBR,
            NumFacFsr,
            DateFacFsr,
            TypeDocument} = req.body;
            const newBonDeLivraison = {
                _id,
                Doc_no,
                CodeSociete,
                Depot,
                DateBR,
                NumBr,
                NumFournisseur,
                NomFournisseur,
                MontantHT,
                MontantTVA,
                MontantBR,
                NumFacFsr,
                DateFacFsr,
                TypeDocument,
            }
    await BonDeLivraisonModel.create(newBonDeLivraison);
    res.send("BonDeLivraison créé!");
}))

router.put("/update/:idToUpdate",asyncHandler(async(req, res) =>{
    const {
        _id, 
        Doc_no,
        CodeSociete,
        Depot,
        DateBR,
        NumBr,
        NumFournisseur,
        NomFournisseur,
        MontantHT,
        MontantTVA,
        MontantBR,
        NumFacFsr,
        DateFacFsr,
        TypeDocument} = req.body;
        const newBonDeLivraison = {
            _id,
            Doc_no,
            CodeSociete,
            Depot,
            DateBR,
            NumBr,
            NumFournisseur,
            NomFournisseur,
            MontantHT,
            MontantTVA,
            MontantBR,
            NumFacFsr,
            DateFacFsr,
            TypeDocument,
        }
    const idToUpdate = req.params['idToUpdate']
    await BonDeLivraisonModel.updateOne({_id : idToUpdate},
    {$set : {
            Doc_no : newBonDeLivraison.Doc_no,
            CodeSociete : newBonDeLivraison.CodeSociete,
            Depot : newBonDeLivraison.Depot,
            DateBR : newBonDeLivraison.DateBR,
            NumBr : newBonDeLivraison.NumBr,
            NumFournisseur : newBonDeLivraison.NumFournisseur,
            NomFournisseur : newBonDeLivraison.NomFournisseur,
            MontantHT : newBonDeLivraison.MontantHT,
            MontantTVA : newBonDeLivraison.MontantTVA,
            MontantBR : newBonDeLivraison.MontantBR,
            NumFacFsr : newBonDeLivraison.NumFacFsr,
            DateFacFsr : newBonDeLivraison.DateFacFsr,
            TypeDocument : newBonDeLivraison.TypeDocument,
        }
    })
res.send("BonDeLivraison modifié!");
}))

router.delete("/:idToDelete",asyncHandler(async(req,res)=>{
    const idToDelete = req.params['idToDelete'];
    await BonDeLivraisonModel.deleteOne({_id : idToDelete})
}))

router.get("/", asyncHandler(async(req, res) =>{
    const BonDeLivraison = await BonDeLivraisonModel.find();
    res.send(BonDeLivraison);
}))

router.get("/search/:searchTerm",asyncHandler(async(req,res) =>{
    const searchRegex = new RegExp(req.params['searchTerm'], 'i');
    const BonDeLivraison = await BonDeLivraisonModel.find({designation: {$regex:searchRegex}})
    res.send(BonDeLivraison);
}))

router.get("/reference/:reference",asyncHandler(async(req,res) =>{
    const reference = req.params['reference'];
    const BonDeLivraison = await BonDeLivraisonModel.findOne({reference: reference})
    res.send(BonDeLivraison);
}))

router.get("/id/:id",asyncHandler(async(req,res) =>{
    const id = req.params['id'];
    const BonDeLivraison = await BonDeLivraisonModel.findOne({_id: id})
    res.send(BonDeLivraison);
})) 

router.get("/famille/:famille", asyncHandler(async(req,res) =>{
        const BonDeLivraison = await BonDeLivraisonModel.find({categorie : req.params['famille']})
    res.send(BonDeLivraison);
})) 

export default router;