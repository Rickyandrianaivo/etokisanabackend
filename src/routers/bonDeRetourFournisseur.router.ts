import { Router } from "express";
import asyncHandler from "express-async-handler";
import { BonDeRetourFournisseurModel } from "../models/bonDeRetourFournisseur.model";


const router = Router();

// router.get("/seed",asyncHandler(async(req, res) =>{
//     const BonDeRetourFournisseurCount = await BonDeRetourFournisseurModel.countDocuments();
//     if(BonDeRetourFournisseurCount > 0){
//         res.send("BonDeRetourFournisseur seed is already done");
//         return;
//     }
//     await BonDeRetourFournisseurModel.create(sample_BonDeRetourFournisseur);
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
            const newBonDeRetourFournisseur = {
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
    await BonDeRetourFournisseurModel.create(newBonDeRetourFournisseur);
    res.send("BonDeRetourFournisseur créé!");
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
    await BonDeRetourFournisseurModel.updateOne({_id : idToUpdate},
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
res.send("BonDeRetourFournisseur modifié!");
}))

router.delete("/:idToDelete",asyncHandler(async(req,res)=>{
    const idToDelete = req.params['idToDelete'];
    await BonDeRetourFournisseurModel.deleteOne({_id : idToDelete})
}))

router.get("/", asyncHandler(async(req, res) =>{
    const BonDeRetourFournisseur = await BonDeRetourFournisseurModel.find();
    res.send(BonDeRetourFournisseur);
}))

router.get("/search/:searchTerm",asyncHandler(async(req,res) =>{
    const searchRegex = new RegExp(req.params['searchTerm'], 'i');
    const BonDeRetourFournisseur = await BonDeRetourFournisseurModel.find({designation: {$regex:searchRegex}})
    res.send(BonDeRetourFournisseur);
}))

router.get("/reference/:reference",asyncHandler(async(req,res) =>{
    const reference = req.params['reference'];
    const BonDeRetourFournisseur = await BonDeRetourFournisseurModel.findOne({reference: reference})
    res.send(BonDeRetourFournisseur);
}))

router.get("/id/:id",asyncHandler(async(req,res) =>{
    const id = req.params['id'];
    const BonDeRetourFournisseur = await BonDeRetourFournisseurModel.findOne({_id: id})
    res.send(BonDeRetourFournisseur);
})) 

router.get("/famille/:famille", asyncHandler(async(req,res) =>{
        const BonDeRetourFournisseur = await BonDeRetourFournisseurModel.find({categorie : req.params['famille']})
    res.send(BonDeRetourFournisseur);
})) 

export default router;