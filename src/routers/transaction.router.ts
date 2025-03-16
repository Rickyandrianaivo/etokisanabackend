import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { CategoryModel } from "../models/category.model.js";
import { sample_categories } from "../data.js";

const router = Router();


router.post("/add",expressAsyncHandler(async(req,res)=>{
    const {
        userId,
        tiersId,
        codeProduit,
        typeES,
        produitId,
        libelle,
        montant,
        statut,
        siteId
    } = req.body;
    const newCategory = {
        userId,
        tiersId,
        codeProduit,
        typeES,
        produitId,
        libelle,
        montant,
        statut,
        siteId
    }
    await CategoryModel.create(newCategory);
    res.status(200)
}))
router.get("/", expressAsyncHandler(async(req,res)=>{
    const categories = await CategoryModel.find();
    res.send(categories).status(200);
    
}))
router.put("/update/:id",expressAsyncHandler(async(req,res)=>{
    const {
        userId,
        tiersId,
        codeProduit,
        typeES,
        produitId,
        libelle,
        montant,
        statut,
        siteId
    } = req.body;
    await CategoryModel.updateOne({_id : req.params['id']},{
        userId,
        tiersId,
        codeProduit,
        typeES,
        produitId,
        libelle,
        montant,
        statut,
        siteId
    })
}))
router.delete("/delete/:id",expressAsyncHandler(async(req,res)=>{
    res.send().status(200);
}))

export default router;