"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const express_async_handler_1 = tslib_1.__importDefault(require("express-async-handler"));
const product_model_1 = require("../models/product.model");
// import { StockElementModel } from "../models/stockElement.model.js";
// import { DepotItemModel } from "../models/DepotItem.model.js";
// import { SendEmail } from "../Utils/Emails/sendEmail.js";
// import { SiteModel } from "../models/site.model.js";
// import { UserModel } from "../models/user.model.js";
const data_1 = require("../data");
const basic_ftp_1 = tslib_1.__importDefault(require("basic-ftp"));
const multer_1 = tslib_1.__importDefault(require("multer"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)({ dest: "uploads/" }); // stockage temporaire
router.post('/upload-image', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, error: "Aucun fichier fourni" });
    }
    const localPath = req.file.path; // chemin temporaire
    // const newFileName = new Date()+"-"+req.file.originalname;
    const newFileName = req.file.originalname;
    // console.log(newFileName);
    const remotePath = `/httpdocs/images/${newFileName}`; // destination
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
        const imageUrl = `https://www.commercegestion.com/images/${newFileName}`;
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
router.post("/seed", (0, express_async_handler_1.default)(async (req, res) => {
    const productCounts = await product_model_1.ProductModel.countDocuments();
    if (productCounts > 4) {
        res.send("Seed is already done !!");
        return;
    }
    await product_model_1.ProductModel.create(data_1.sample_products);
    res.send("Seed is done!!");
}));
router.post("/add/", (0, express_async_handler_1.default)(async (req, res) => {
    const { codeCPC, productName, productDescription, productCategory, productState, productImage, productValidation, productVolume, productHauteur, productLargeur, productLongueur, productPoids, productOwnerId, } = req.body;
    const newProduct = {
        codeCPC,
        productName,
        productDescription,
        productCategory,
        productState,
        productImage,
        productValidation,
        productVolume,
        productHauteur,
        productLargeur,
        productLongueur,
        productPoids,
        productOwnerId,
    };
    const newProductData = req.body;
    console.log(newProductData);
    console.log(newProduct);
    console.log("produit créé");
    await product_model_1.ProductModel.create(newProduct);
    res.send(newProduct);
}));
router.patch("/update/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const modifiedProduct = await product_model_1.ProductModel.updateOne({ _id: req.params['id'] }, { $set: req.body });
    res.send(modifiedProduct);
}));
router.delete("/delete/:id", (0, express_async_handler_1.default)(async (req, res) => {
    await product_model_1.ProductModel.deleteOne({ _id: req.params['id'] });
    res.status(200).send("suppression réussie !");
}));
router.get("/", (0, express_async_handler_1.default)(async (req, res) => {
    const allProducts = await product_model_1.ProductModel.find();
    res.send(allProducts).status(200);
}));
router.get("/id/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const productId = req.params['id'];
    // console.log("getproductbyid",productId);
    const selectedProduct = await product_model_1.ProductModel.findOne({ _id: productId });
    if (!selectedProduct) {
        res.status(404).send("Produit non trouvé");
    }
    else {
        res.send(selectedProduct).status(200);
    }
}));
router.get("/owner/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const ownerId = req.params['id'];
    const selectedProduct = await product_model_1.ProductModel.find({ productOwnerId: ownerId });
    res.send(selectedProduct);
}));
router.get("/email/:email", (0, express_async_handler_1.default)(async (req, res) => {
    const productOwner = req.params['email'];
    const selectedProduct = await product_model_1.ProductModel.find({ productOwner: productOwner });
    res.send(selectedProduct);
}));
router.get("/category/:category", (0, express_async_handler_1.default)(async (req, res) => {
    const productCat = req.params['category'];
    const productByCat = await product_model_1.ProductModel.find({ productCategory: productCat });
    res.send(productByCat);
}));
router.get("/state/:state", (0, express_async_handler_1.default)(async (req, res) => {
    const productState = req.params['state'];
    const productByState = await product_model_1.ProductModel.find({ productCategory: productState });
    res.send(productByState);
}));
// à faire searchterm
// filtre par prix croissant & décroissant ou fourchette
// prévoir combinaison de filtre localisation, provenance, prix 
exports.default = router;
//# sourceMappingURL=product.router.js.map