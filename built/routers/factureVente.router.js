import { Router } from "express";
import asyncHandler from "express-async-handler";
import { ArticleModel } from "../models/article.models";
import { FactureVenteModel } from "../models/factureVente.model";
const router = Router();
router.get("/", asyncHandler(async (req, res) => {
    res.send(await FactureVenteModel.find());
}));
router.get("/:dateDu/:dateAu", asyncHandler(async (req, res) => {
    const dateDu = req.params['dateDu'];
    const dateAu = req.params['dateAu'];
    let factureVentes;
    if (dateDu && dateAu) {
        factureVentes = await FactureVenteModel.find({ date: { $gte: new Date(dateDu), $lte: new Date(dateAu) } });
    }
    else {
        factureVentes = await FactureVenteModel.find();
    }
    res.send(factureVentes);
}));
router.get("/search/:searchTerm", asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params['searchTerm'], 'i');
    const factureVentes = await FactureVenteModel.find({ designation: { $regex: searchRegex } });
    res.send(factureVentes);
}));
router.get("/:numeroDoc", asyncHandler(async (req, res) => {
    const numeroDoc = req.params['numeroDoc'];
    const factureVente = await FactureVenteModel.findOne({ numeroDocument: numeroDoc });
    res.send(factureVente);
}));
router.get("/reference/:reference", asyncHandler(async (req, res) => {
    const reference = req.params['reference'];
    const article = await ArticleModel.findOne({ reference: reference });
    res.send(article);
}));
router.post("/create", asyncHandler(async (req, res) => {
    const { numeroDocument, date, numeroClient, totalHT, totalTVA, totalTTC, montantAcompte, netAPayer, paye, annule, depot, soldeDu } = req.body;
    const newFactureVente = {
        numeroDocument,
        date,
        numeroClient,
        totalHT,
        totalTVA,
        totalTTC,
        montantAcompte,
        netAPayer,
        paye,
        annule,
        depot,
        soldeDu
    };
    await FactureVenteModel.create(newFactureVente);
    res.send(newFactureVente);
}));
export default router;
//# sourceMappingURL=factureVente.router.js.map