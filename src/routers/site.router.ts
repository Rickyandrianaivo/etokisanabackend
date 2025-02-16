import { Router } from "express"
import expressAsyncHandler from "express-async-handler";
import { SiteModel } from "../models/site.model.js";
// import { sample_Sites } from "../data";

const router = Router();

router.post("/add",expressAsyncHandler(async(req,res)=>{
    const {
        siteName,
        siteAddress,
        siteLat,
        siteLng,
        siteUserId
    }= req.body;
    const newSite = {
        siteName,
        siteAddress,
        siteLat,
        siteLng,
        siteUserId
    }
    await SiteModel.create(newSite);
    res.send(newSite);
}))
router.get("/",expressAsyncHandler(async(req,res)=>{
    const allSites = await SiteModel.find();
    res.send(allSites);
}))
router.get("/:id",expressAsyncHandler(async(req,res)=>{
    const userId = req.params['userId'];
    console.log(userId);
    const selectedSite = await SiteModel.find({siteUserId : userId});
    res.send(selectedSite);
}))
router.put("/update/:id",expressAsyncHandler(async(req,res)=>{
    const {
        siteName,
        siteAddress,
        siteLat,
        siteLng,
        siteUserId,
    }= req.body;
    const modifiedSite = await SiteModel.updateOne({_id : req.params['id']},
    {
        siteName,
        siteAddress,
        siteLat,
        siteLng,
        siteUserId
    })
    res.send(modifiedSite);
}))
router.delete("delete/:id",expressAsyncHandler(async(req,res)=>{
    res.status(200)
}))


export default router;