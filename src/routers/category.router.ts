import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { CategoryModel } from "../models/category.model.ts";
import { sample_categories } from "../data.ts";

const router = Router();

router.post("/category/seed",expressAsyncHandler(async(req,res)=>{
    const productCounts = await CategoryModel.countDocuments();
        if(productCounts>0){
            res.send("Seed is already done !!");
            return;
        }
        await CategoryModel.create(sample_categories);
        res.send("Seed is done!!")
}))

router.post("/category",expressAsyncHandler(async(req,res)=>{
    const {
        CatName
    } = req.body;
    const newCategory = {
        CatName,
    }
    await CategoryModel.create(newCategory);
    res.status(200)
}))
router.put("/category/:id",expressAsyncHandler(async(req,res)=>{
    const {
        CatName
    } = req.body;
    await CategoryModel.updateOne({_id : req.params['id']},{
        CatName
    })
}))
router.delete("/category/:id",expressAsyncHandler(async(req,res)=>{
    res.status(200);
}))

export default router;