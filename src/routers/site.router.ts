import { Router } from "express"
import expressAsyncHandler from "express-async-handler";
import { SiteModel } from "../models/site.model.js";
// import { sample_Sites } from "../data";

const router = Router();


router.post("/site/seed",expressAsyncHandler(async(req,res)=>{
        const SiteCounts = await SiteModel.countDocuments();
        if(SiteCounts>0){
            res.send("Seed is already done !!");
            return;
        }
        // await SiteModel.create(sample_Sites);
        res.send("Seed is done!!")
}))
router.post("/site",expressAsyncHandler(async(req,res)=>{
    const {
        SiteName,
        SiteAddress,
        SiteLat,
        SiteLng,
    }= req.body;
    const newSite = {
        SiteName,
        SiteAddress,
        SiteLat,
        SiteLng,
    }
    await SiteModel.create(newSite);
    res.send(newSite);
}))
router.put("/site/:id",expressAsyncHandler(async(req,res)=>{
    const {
        SiteName,
        SiteAddress,
        SiteLat,
        SiteLng,
    }= req.body;
    const modifiedSite = await SiteModel.updateOne({_id : req.params['id']},
    {
        SiteName,
        SiteAddress,
        SiteLat,
        SiteLng,
    })
    res.send(modifiedSite);
}))
router.delete("/:id",expressAsyncHandler(async(req,res)=>{
    res.status(200)
}))

router.get("/",expressAsyncHandler(async(req,res)=>{
    const allSites = await SiteModel.find();
    res.send(allSites);
}))
router.get("/:id",expressAsyncHandler(async(req,res)=>{
    const SiteId = req.params['id'];
    const selectedSite = await SiteModel.findById(SiteId);
    res.send(selectedSite);
}))
router.get("/category/:category",expressAsyncHandler(async(req,res)=>{
    const SiteCat = req.params['category']
    const SiteByCat = await SiteModel.find({SiteCategory : SiteCat});
    res.send(SiteByCat);
}))
router.get("/state/:state",expressAsyncHandler(async(req,res)=>{
    const SiteState = req.params['state']
    const SiteByState = await SiteModel.find({SiteCategory : SiteState});
    res.send(SiteByState);
}))

export default router;