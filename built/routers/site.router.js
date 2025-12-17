"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const express_async_handler_1 = tslib_1.__importDefault(require("express-async-handler"));
const site_model_1 = require("../models/site.model");
// import { sample_Sites } from "../data";
const router = (0, express_1.Router)();
router.post("/add", (0, express_async_handler_1.default)(async (req, res) => {
    const { siteName, siteAddress, siteLat, siteLng, siteUserID } = req.body;
    const newSite = {
        siteName,
        siteAddress,
        siteLat,
        siteLng,
        siteUserID
    };
    await site_model_1.SiteModel.create(newSite);
    res.send(newSite);
}));
router.get("/", (0, express_async_handler_1.default)(async (req, res) => {
    const allSites = await site_model_1.SiteModel.find();
    res.send(allSites);
}));
router.get("/user/:userId", (0, express_async_handler_1.default)(async (req, res) => {
    const userId = req.params['userId'];
    // console.log(userId);
    const userSites = await site_model_1.SiteModel.find({ siteUserID: userId });
    res.send(userSites);
}));
router.get("/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const siteId = req.params['id'];
    // console.log(siteId);
    const selectedSite = await site_model_1.SiteModel.findById({ _id: siteId });
    res.send(selectedSite);
}));
router.put("/update/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const { siteName, siteAddress, siteLat, siteLng, siteUserID, } = req.body;
    const modifiedSite = await site_model_1.SiteModel.updateOne({ _id: req.params['id'] }, {
        siteName,
        siteAddress,
        siteLat,
        siteLng,
        siteUserID
    });
    res.send(modifiedSite);
}));
router.delete("/delete/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const siteId = req.params['id'];
    await site_model_1.SiteModel.deleteOne({ _id: siteId });
    res.status(200).send("Site supprimé !!!");
}));
router.post("/addStock", (0, express_async_handler_1.default)(async (req, res) => {
    const { depotId, productId, quantity } = req.body;
}));
exports.default = router;
//# sourceMappingURL=site.router.js.map