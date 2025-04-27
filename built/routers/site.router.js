import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { SiteModel } from "../models/site.model.js";
// import { sample_Sites } from "../data";
const router = Router();
router.post("/add", expressAsyncHandler(async (req, res) => {
    const { siteName, siteAddress, siteLat, siteLng, siteUserID } = req.body;
    const newSite = {
        siteName,
        siteAddress,
        siteLat,
        siteLng,
        siteUserID
    };
    await SiteModel.create(newSite);
    res.send(newSite);
}));
router.get("/", expressAsyncHandler(async (req, res) => {
    const allSites = await SiteModel.find();
    res.send(allSites);
}));
router.get("/user/:userId", expressAsyncHandler(async (req, res) => {
    const userId = req.params['userId'];
    // console.log(userId);
    const userSites = await SiteModel.find({ siteUserID: userId });
    res.send(userSites);
}));
router.get("/:id", expressAsyncHandler(async (req, res) => {
    const siteId = req.params['id'];
    // console.log(siteId);
    const selectedSite = await SiteModel.findById({ _id: siteId });
    res.send(selectedSite);
}));
router.put("/update/:id", expressAsyncHandler(async (req, res) => {
    const { siteName, siteAddress, siteLat, siteLng, siteUserID, } = req.body;
    const modifiedSite = await SiteModel.updateOne({ _id: req.params['id'] }, {
        siteName,
        siteAddress,
        siteLat,
        siteLng,
        siteUserID
    });
    res.send(modifiedSite);
}));
router.delete("/delete/:id", expressAsyncHandler(async (req, res) => {
    const siteId = req.params['id'];
    await SiteModel.deleteOne({ _id: siteId });
    res.status(200).send("Site effacer ! ");
}));
export default router;
//# sourceMappingURL=site.router.js.map