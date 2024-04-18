import { Router } from "express";
import asyncHandler from "express-async-handler";
import { BonDeRetourFournisseurDetailsModel } from "../models/bonDeRetourFournisseurDetails.model";


const router = Router();

// router.get("/seed",asyncHandler(async(req, res) =>{
//     const BonDeRetourFournisseurDetailsCount = await BonDeRetourFournisseurDetailsModel.countDocuments();
//     if(BonDeRetourFournisseurDetailsCount > 0){
//         res.send("BonDeRetourFournisseurDetails seed is already done");
//         return;
//     }
//     await BonDeRetourFournisseurDetailsModel.create(sample_BonDeRetourFournisseurDetails);
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
            const newBonDeRetourFournisseurDetails = {
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
    await BonDeRetourFournisseurDetailsModel.create(newBonDeRetourFournisseurDetails);
    res.send("BonDeRetourFournisseurDetails créé!");
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
    const idToUpdate = req.params['idToUpdate']
    await BonDeRetourFournisseurDetailsModel.updateOne({_id : idToUpdate},
    {$set : {
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
    })
res.send("BonDeRetourFournisseurDetails modifié!");
}))

router.delete("/:idToDelete",asyncHandler(async(req,res)=>{
    const idToDelete = req.params['idToDelete'];
    await BonDeRetourFournisseurDetailsModel.deleteOne({_id : idToDelete})
}))

router.get("/", asyncHandler(async(req, res) =>{
    const BonDeRetourFournisseurDetails = await BonDeRetourFournisseurDetailsModel.find();
    res.send(BonDeRetourFournisseurDetails);
}))

router.get("/search/:searchTerm",asyncHandler(async(req,res) =>{
    const searchRegex = new RegExp(req.params['searchTerm'], 'i');
    const BonDeRetourFournisseurDetails = await BonDeRetourFournisseurDetailsModel.find({designation: {$regex:searchRegex}})
    res.send(BonDeRetourFournisseurDetails);
}))

router.get("/reference/:reference",asyncHandler(async(req,res) =>{
    const reference = req.params['reference'];
    const BonDeRetourFournisseurDetails = await BonDeRetourFournisseurDetailsModel.findOne({reference: reference})
    res.send(BonDeRetourFournisseurDetails);
}))

router.get("/id/:id",asyncHandler(async(req,res) =>{
    const id = req.params['id'];
    const BonDeRetourFournisseurDetails = await BonDeRetourFournisseurDetailsModel.findOne({_id: id})
    res.send(BonDeRetourFournisseurDetails);
})) 

router.get("/famille/:famille", asyncHandler(async(req,res) =>{
        const BonDeRetourFournisseurDetails = await BonDeRetourFournisseurDetailsModel.find({categorie : req.params['famille']})
    res.send(BonDeRetourFournisseurDetails);
})) 

export default router;