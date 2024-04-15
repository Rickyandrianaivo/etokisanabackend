import asyncHandler from 'express-async-handler';
import { Router } from "express";
import { MouvementStockModel } from '../models/mouvementStock.model';
import { PointDeVenteModel } from '../models/pointDeVente.model';
import { ArticleModel } from '../models/article.models';
const router = Router();
router.get("/:dateDu/:dateAu", asyncHandler(async (req, res) => {
    let dateDu = req.params['dateDu'];
    let dateAu = req.params['dateAu'];
    let precInv;
    if (dateDu && dateAu) {
        precInv = await MouvementStockModel.find({ date: { $gte: dateDu, $lte: dateAu } }).populate('article');
    }
    else {
        precInv = await MouvementStockModel.find();
    }
    res.send(precInv);
}));
router.post("/create", asyncHandler(async (req, res) => {
    const pV = await PointDeVenteModel.findOne();
    const { date, article, numeroDocument, typeDocument, sousTypeDocument, quantite, valeurDuMouvement, stockReel, valeurStock, depot, codeSociete, numeroLigne } = req.body;
    const theArticle = await ArticleModel.findOne({ _id: article.id });
    const newMouvementStock = {
        date,
        article: article._id,
        numeroDocument,
        typeDocument,
        sousTypeDocument,
        quantite,
        valeurDuMouvement,
        stockReel,
        valeurStock,
        depot,
        codeSociete,
        numeroLigne,
    };
    await MouvementStockModel.create(newMouvementStock);
    if (pV) {
        const newNumeroMvStck = pV.numeroMouvementStock + 1;
        await PointDeVenteModel.updateOne({ _id: pV.id }, { $set: { numeroMouvementStock: newNumeroMvStck } });
    }
}));
router.get("/:dateDu/:dateAu/:articleId", asyncHandler(async (req, res) => {
    let dateDu = req.params['dateDu'];
    let dateAu = req.params['dateAu'];
    let articleId = req.params['articleId'];
    let mouvementStockPourEtatStock = await MouvementStockModel.find({ _id: articleId, date: { $gte: dateDu, $lte: dateAu } });
    res.send(mouvementStockPourEtatStock);
}));
router.post("/createArray", asyncHandler(async (req, res) => {
    const pV = await PointDeVenteModel.findOne();
    const mouvementStocks = req.body;
    mouvementStocks.forEach(async (mouvementStock) => {
        const newMouvementStock = {
            date: mouvementStock.date,
            article: mouvementStock.article._id,
            numeroDocument: mouvementStock.numeroDocument,
            typeDocument: mouvementStock.typeDocument,
            sousTypeDocument: mouvementStock.sousTypeDocument,
            quantite: mouvementStock.quantite,
            valeurDuMouvement: mouvementStock.valeurDuMouvement,
            stockReel: mouvementStock.stockReel,
            valeurStock: mouvementStock.valeurStock,
            depot: mouvementStock.depot,
            codeSociete: mouvementStock.codeSociete,
            numeroLigne: mouvementStock.numeroLigne,
        };
        MouvementStockModel.create(newMouvementStock);
    });
    if (pV) {
        const newNumeroMvStck = pV.numeroMouvementStock + 1;
        await PointDeVenteModel.updateOne({ _id: pV.id }, { $set: { numeroMouvementStock: newNumeroMvStck } });
    }
}));
export default router;
//# sourceMappingURL=mouvementStock.router.js.map