import { Router } from "express";
import asyncHandler from "express-async-handler";
import { BonDeRetourClientModel } from "../models/bonDeRetourClient.model";


const router = Router();

// router.get("/seed",asyncHandler(async(req, res) =>{
//     const BonDeRetourClientCount = await BonDeRetourClientModel.countDocuments();
//     if(BonDeRetourClientCount > 0){
//         res.send("BonDeRetourClient seed is already done");
//         return;
//     }
//     await BonDeRetourClientModel.create(sample_BonDeRetourClient);
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
            const newBonDeRetourClient = {
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
    await BonDeRetourClientModel.create(newBonDeRetourClient);
    res.send("BonDeRetourClient créé!");
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
    await BonDeRetourClientModel.updateOne({_id : idToUpdate},
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
            TypeDocument
        }
    })
res.send("BonDeRetourClient modifié!");
}))

router.delete("/:idToDelete",asyncHandler(async(req,res)=>{
    const idToDelete = req.params['idToDelete'];
    await BonDeRetourClientModel.deleteOne({_id : idToDelete})
}))

router.get("/", asyncHandler(async(req, res) =>{
    const BonDeRetourClient = await BonDeRetourClientModel.find();
    res.send(BonDeRetourClient);
}))

router.get("/search/:searchTerm",asyncHandler(async(req,res) =>{
    const searchRegex = new RegExp(req.params['searchTerm'], 'i');
    const BonDeRetourClient = await BonDeRetourClientModel.find({designation: {$regex:searchRegex}})
    res.send(BonDeRetourClient);
}))

router.get("/reference/:reference",asyncHandler(async(req,res) =>{
    const reference = req.params['reference'];
    const BonDeRetourClient = await BonDeRetourClientModel.findOne({reference: reference})
    res.send(BonDeRetourClient);
}))

router.get("/id/:id",asyncHandler(async(req,res) =>{
    const id = req.params['id'];
    const BonDeRetourClient = await BonDeRetourClientModel.findOne({_id: id})
    res.send(BonDeRetourClient);
})) 

router.get("/famille/:famille", asyncHandler(async(req,res) =>{
        const BonDeRetourClient = await BonDeRetourClientModel.find({categorie : req.params['famille']})
    res.send(BonDeRetourClient);
})) 

export default router;