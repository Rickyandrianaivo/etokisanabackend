"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const express_async_handler_1 = tslib_1.__importDefault(require("express-async-handler"));
const DepotItem_model_1 = require("../models/DepotItem.model");
// import { SendEmail } from "../Utils/Emails/sendEmail.js";
const site_model_1 = require("../models/site.model");
const user_model_1 = require("../models/user.model");
const basic_ftp_1 = tslib_1.__importDefault(require("basic-ftp"));
const multer_1 = tslib_1.__importDefault(require("multer"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)({ dest: "uploads/" }); // stockage temporaire
router.get("/", (0, express_async_handler_1.default)(async (req, res) => {
    const allProducts = await DepotItem_model_1.DepotItemModel.find();
    res.send(allProducts);
}));
router.patch("/update/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const modifiedProduct = await DepotItem_model_1.DepotItemModel.updateOne({ _id: req.params['id'] }, { $set: req.body });
    res.send(modifiedProduct);
}));
router.delete("/delete/:id", (0, express_async_handler_1.default)(async (req, res) => {
    await DepotItem_model_1.DepotItemModel.deleteOne({ _id: req.params['id'] });
    res.status(200).send("suppression réussie !");
}));
router.get("/id/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const depotItemId = req.params['id'];
    const selectedProduct = await DepotItem_model_1.DepotItemModel.findOne({ _id: depotItemId });
    res.send(selectedProduct).status(200);
}));
router.get("/owner/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const ownerId = req.params['id'];
    const selectedProduct = await DepotItem_model_1.DepotItemModel.find({ productOwnerId: ownerId });
    res.send(selectedProduct);
}));
router.get("/category/:category", (0, express_async_handler_1.default)(async (req, res) => {
    const productCat = req.params['category'];
    const productByCat = await DepotItem_model_1.DepotItemModel.find({ productCategory: productCat });
    res.send(productByCat);
}));
router.get("/state/:state", (0, express_async_handler_1.default)(async (req, res) => {
    const productState = req.params['state'];
    const productByState = await DepotItem_model_1.DepotItemModel.find({ productCategory: productState });
    res.send(productByState);
}));
router.get("/stock/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const depotId = req.params['id'];
    const productInStock = await DepotItem_model_1.DepotItemModel.find({ currentDepotId: depotId });
    res.send(productInStock);
}));
router.get("/productinfos/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const depotItemId = req.params['id'];
    const depotItemProductInfos = await DepotItem_model_1.DepotItemModel.findOne({ _id: depotItemId }).populate({ path: 'productId' });
    res.send(depotItemProductInfos).status(200);
}));
router.get('/getStock/:productId/:depotId', (0, express_async_handler_1.default)(async (req, res) => {
    const productId = req.params['productId'];
    const depotId = req.params['depotId'];
    const currentStock = await DepotItem_model_1.DepotItemModel.findOne({ productId, currentDepotId: depotId });
    console.log(currentStock);
    res.status(200).send(currentStock);
}));
router.post('/add', (0, express_async_handler_1.default)(async (req, res) => {
    const { productId, stock, prix, lastUpdate, currentDepotId, } = req.body;
    let newDepotItemData = {
        productId,
        stock,
        prix,
        lastUpdate,
        currentDepotId,
    };
    const newDepotItem = await DepotItem_model_1.DepotItemModel.create(newDepotItemData);
    const currentSite = await site_model_1.SiteModel.findOne({ _id: currentDepotId });
    if (currentSite) {
        const currentUser = await user_model_1.UserModel.findOne({ userId: currentSite.siteUserID });
        if (currentUser) {
            // let contexteEmail = {
            //     name:currentUser.userNickName,
            // }
            // SendEmail(
            //     // "baseMail",
            //     // "Deposit",
            //     currentUser.userEmail,
            //     "Nouveau produit mis en stock",
            //     // contexteEmail
            // )            
        }
    }
    res.send(newDepotItem).status(200);
}));
router.post('/delete/:id', (0, express_async_handler_1.default)(async (req, res) => {
    const deletedDepotItem = await DepotItem_model_1.DepotItemModel.findOne({ _id: req.params['id'] });
    res.send(deletedDepotItem).status(200);
}));
router.post('/deleteByProductId/:id', (0, express_async_handler_1.default)(async (req, res) => {
    const deletedDepotItem = await DepotItem_model_1.DepotItemModel.deleteMany({ productId: req.params['id'] });
    res.send(deletedDepotItem).status(200);
}));
router.patch('/modifyDepotItem/:id', (0, express_async_handler_1.default)(async (req, res) => {
    const newDepotItem = await DepotItem_model_1.DepotItemModel.updateOne({ _id: req.params['id'] }, { $set: req.body });
    res.send(newDepotItem).status(200);
}));
router.get('/ByProductId/:id', (0, express_async_handler_1.default)(async (req, res) => {
    const allDepotItemByProductId = await DepotItem_model_1.DepotItemModel.findOne({ productId: req.params['id'] });
    // .populate('productId')
    // .populate('currentDepotId')
    // .exec();
    res.status(200).send(allDepotItemByProductId);
}));
router.post('/upload-image', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, error: "Aucun fichier fourni" });
    }
    const localPath = req.file.path; // chemin temporaire
    const remotePath = `/httpdocs/images/${req.file.originalname}`; // destination
    const client = new basic_ftp_1.default.Client();
    client.ftp.verbose = true;
    try {
        //Connextion FTP
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PWD,
            secure: false // mettre true si FTPS
        });
        // Envoi du fichier
        await client.uploadFrom(localPath, remotePath);
        const imageUrl = `https://www.commercegestion.com/images/${req.file.originalname}`;
        //Supprimer le fichier local après upload
        fs_1.default.unlinkSync(localPath);
        const responseData = {
            succes: true,
            message: "Fichier uploadé avec succès !",
            originalFileName: req.file?.originalname,
            mimeType: req.file?.mimetype,
            sizeInBytes: req.file?.size,
            url: imageUrl
        };
        return res.json({ responseData });
    }
    catch (error) {
        console.error("Erreur FTP:", error);
        return res.status(500).json({ success: false, error: "Erreur lors de l'upload" });
    }
    finally {
        client.close();
        // return res.json({message: "Processus d'upload terminé"});
    }
});
// à faire searchterm
// filtre par prix croissant & décroissant ou fourchette
// prévoir combinaison de filtre localisation, provenance, prix 
exports.default = router;
//# sourceMappingURL=depotItem.router.js.map