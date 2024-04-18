import { Router } from "express";
import asyncHandler from "express-async-handler";
import { BonDeRetourClientDetailsModel } from "../models/bonDeRetourClientDetails.model";


const router = Router();

// router.get("/seed",asyncHandler(async(req, res) =>{
//     const BonDeRetourClientDetailsCount = await BonDeRetourClientDetailsModel.countDocuments();
//     if(BonDeRetourClientDetailsCount > 0){
//         res.send("BonDeRetourClientDetails seed is already done");
//         return;
//     }
//     await BonDeRetourClientDetailsModel.create(sample_BonDeRetourClientDetails);
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
            const newBonDeRetourClientDetails = {
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
    await BonDeRetourClientDetailsModel.create(newBonDeRetourClientDetails);
    res.send("BonDeRetourClientDetails créé!");
}))

router.put("/update/:idToUpdate",asyncHandler(async(req, res) =>{
    const {
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
        const newBonDeRetourClientDetails = {
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
    await BonDeRetourClientDetailsModel.updateOne({_id : idToUpdate},
    {$set : {
            Doc_no : newBonDeRetourClientDetails.Doc_no,
            CodeSociete : newBonDeRetourClientDetails.CodeSociete,
            Depot : newBonDeRetourClientDetails.Depot,
            DateBR : newBonDeRetourClientDetails.DateBR,
            NumBr : newBonDeRetourClientDetails.NumBr,
            NumFournisseur : newBonDeRetourClientDetails.NumFournisseur,
            NomFournisseur : newBonDeRetourClientDetails.NomFournisseur,
            MontantHT : newBonDeRetourClientDetails.MontantHT,
            MontantTVA : newBonDeRetourClientDetails.MontantTVA,
            MontantBR : newBonDeRetourClientDetails.MontantBR,
            NumFacFsr : newBonDeRetourClientDetails.NumFacFsr,
            DateFacFsr : newBonDeRetourClientDetails.DateFacFsr,
            TypeDocument : newBonDeRetourClientDetails.TypeDocument,
        }
    })
res.send("BonDeRetourClientDetails modifié!");
}))

router.delete("/:idToDelete",asyncHandler(async(req,res)=>{
    const idToDelete = req.params['idToDelete'];
    await BonDeRetourClientDetailsModel.deleteOne({_id : idToDelete})
}))

router.get("/", asyncHandler(async(req, res) =>{
    const BonDeRetourClientDetails = await BonDeRetourClientDetailsModel.find();
    res.send(BonDeRetourClientDetails);
}))

router.get("/search/:searchTerm",asyncHandler(async(req,res) =>{
    const searchRegex = new RegExp(req.params['searchTerm'], 'i');
    const BonDeRetourClientDetails = await BonDeRetourClientDetailsModel.find({designation: {$regex:searchRegex}})
    res.send(BonDeRetourClientDetails);
}))

router.get("/reference/:reference",asyncHandler(async(req,res) =>{
    const reference = req.params['reference'];
    const BonDeRetourClientDetails = await BonDeRetourClientDetailsModel.findOne({reference: reference})
    res.send(BonDeRetourClientDetails);
}))

router.get("/id/:id",asyncHandler(async(req,res) =>{
    const id = req.params['id'];
    const BonDeRetourClientDetails = await BonDeRetourClientDetailsModel.findOne({_id: id})
    res.send(BonDeRetourClientDetails);
})) 

router.get("/famille/:famille", asyncHandler(async(req,res) =>{
        const BonDeRetourClientDetails = await BonDeRetourClientDetailsModel.find({categorie : req.params['famille']})
    res.send(BonDeRetourClientDetails);
})) 

export default router;