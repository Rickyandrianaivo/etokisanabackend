import { Router } from "express";
import asyncHandler from "express-async-handler";
import { BonDeReceptionModel } from "../models/bonDeReception.model";


const router = Router();

// router.get("/seed",asyncHandler(async(req, res) =>{
//     const BonDeReceptionCount = await BonDeReceptionModel.countDocuments();
//     if(BonDeReceptionCount > 0){
//         res.send("BonDeReception seed is already done");
//         return;
//     }
//     await BonDeReceptionModel.create(sample_BonDeReception);
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
            const newBonDeReception = {
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
    await BonDeReceptionModel.create(newBonDeReception);
    res.send("BonDeReception créé!");
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
    await BonDeReceptionModel.updateOne({_id : idToUpdate},
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
res.send("BonDeReception modifié!");
}))

router.delete("/:idToDelete",asyncHandler(async(req,res)=>{
    const idToDelete = req.params['idToDelete'];
    await BonDeReceptionModel.deleteOne({_id : idToDelete})
}))

router.get("/", asyncHandler(async(req, res) =>{
    const BonDeReception = await BonDeReceptionModel.find();
    res.send(BonDeReception);
}))

router.get("/search/:searchTerm",asyncHandler(async(req,res) =>{
    const searchRegex = new RegExp(req.params['searchTerm'], 'i');
    const BonDeReception = await BonDeReceptionModel.find({designation: {$regex:searchRegex}})
    res.send(BonDeReception);
}))

router.get("/reference/:reference",asyncHandler(async(req,res) =>{
    const reference = req.params['reference'];
    const BonDeReception = await BonDeReceptionModel.findOne({reference: reference})
    res.send(BonDeReception);
}))

router.get("/id/:id",asyncHandler(async(req,res) =>{
    const id = req.params['id'];
    const BonDeReception = await BonDeReceptionModel.findOne({_id: id})
    res.send(BonDeReception);
})) 

router.get("/famille/:famille", asyncHandler(async(req,res) =>{
        const BonDeReception = await BonDeReceptionModel.find({categorie : req.params['famille']})
    res.send(BonDeReception);
})) 

export default router;