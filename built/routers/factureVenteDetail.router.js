import { Router } from "express";
import asyncHandler from "express-async-handler";
import { FactureVenteDetailsModel } from '../models/factureVenteDetails.model';
import { PointDeVenteModel } from "../models/pointDeVente.model";
import { ArticleModel } from '../models/article.models';
const router = Router();
router.get("/", asyncHandler(async (req, res) => {
    const factureVentes = await FactureVenteDetailsModel.find();
    res.send(factureVentes);
}));
router.get("/search/:searchTerm", asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params['searchTerm'], 'i');
    const factureVentes = await FactureVenteDetailsModel.find({ designation: { $regex: searchRegex } });
    res.send(factureVentes);
}));
router.get("/:numeroDocument", asyncHandler(async (req, res) => {
    const numeroDoc = req.params['numeroDocument'];
    const factureVenteDetails = await FactureVenteDetailsModel.find({ factureVenteNumDoc: numeroDoc }).populate('article');
    res.send(factureVenteDetails);
}));
router.post("/create", asyncHandler(async (req, res) => {
    const { cartItem, prixVenteTTC, remise, montantNetTTC, factureVenteNumDoc } = req.body;
    const pV = await PointDeVenteModel.findOne();
    if (pV) {
        const numeroVente = pV.numeroVente + 1;
        await PointDeVenteModel.updateOne({ _id: pV._id }, { $set: { numeroVente: numeroVente } });
    }
    const newFactureVenteDetails = {
        pointDeVente: pV?.id,
        article: cartItem.article._id,
        quantite: cartItem.quantity,
        prixVenteTTC,
        remise,
        montantNetTTC,
        factureVenteNumDoc
    };
    await FactureVenteDetailsModel.create(newFactureVenteDetails);
    const newQteStock = cartItem.article.qteEnStock - newFactureVenteDetails.quantite;
    await ArticleModel.updateOne({ _id: cartItem.article._id }, { $set: { qteEnStock: newQteStock } });
    res.send(newFactureVenteDetails);
}));
export default router;
//# sourceMappingURL=factureVenteDetail.router.js.map