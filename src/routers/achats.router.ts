import { Router } from "express";
import asyncHandler from "express-async-handler";
import { AchatsModel } from "../models/achats.model";

const router = Router();

// router.get("/seed",asyncHandler(async(req, res) =>{
//     const AchatsCount = await AchatsModel.countDocuments();
//     if(AchatsCount > 0){
//         res.send("Achats seed is already done");
//         return;
//     }
//     await AchatsModel.create(sample_achats);
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
            const newAchats = {
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
    await AchatsModel.create(newAchats);
    res.send("Achat créé!");
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
    await AchatsModel.updateOne({_id : idToUpdate},
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
res.send("Achat modifié!");
}))

router.delete("/:idToDelete",asyncHandler(async(req,res)=>{
    const idToDelete = req.params['idToDelete'];
    await AchatsModel.deleteOne({_id : idToDelete})
}))

router.get("/", asyncHandler(async(req, res) =>{
    const achats = await AchatsModel.find();
    res.send(achats);
}))

router.get("/search/:searchTerm",asyncHandler(async(req,res) =>{
    const searchRegex = new RegExp(req.params['searchTerm'], 'i');
    const achats = await AchatsModel.find({designation: {$regex:searchRegex}})
    res.send(achats);
}))

router.get("/reference/:reference",asyncHandler(async(req,res) =>{
    const reference = req.params['reference'];
    const Achats = await AchatsModel.findOne({reference: reference})
    res.send(Achats);
}))

router.get("/id/:id",asyncHandler(async(req,res) =>{
    const id = req.params['id'];
    const Achats = await AchatsModel.findOne({_id: id})
    res.send(Achats);
})) 

router.get("/famille/:famille", asyncHandler(async(req,res) =>{
        const achats = await AchatsModel.find({categorie : req.params['famille']})
    res.send(achats);
})) 

export default router;