import { BonSortiesModel } from '../models/bonSortie.model';
import asyncHandler from 'express-async-handler';
import { Router } from "express";
import { PointDeVenteModel } from '../models/pointDeVente.model';
const router = Router();
router.get("/:dateDu/:dateAu", asyncHandler(async (req, res) => {
    const dateDu = req.params['dateDu'];
    const dateAu = req.params['dateAu'];
    if (dateDu && dateAu) {
        res.send(await BonSortiesModel.find({ date: { $gte: dateDu, $lte: dateAu } }));
    }
    else {
        res.send(await BonSortiesModel.find());
    }
}));
router.get("/", asyncHandler(async (req, res) => {
    res.send(await BonSortiesModel.find());
}));
router.put("/create", asyncHandler(async (req, res) => {
    const { numeroDocument, date, typeDocument, codeSociete, depot, valide } = req.body;
    const newBonSortie = {
        numeroDocument,
        date,
        typeDocument,
        codeSociete,
        depot,
        valide
    };
    await BonSortiesModel.create(newBonSortie);
    const pointDeVente = await PointDeVenteModel.findOne();
    if (pointDeVente) {
        const newNumeroBS = pointDeVente.numeroBS + 1;
        await PointDeVenteModel.updateOne({ _id: pointDeVente.id }, { $set: { numeroBS: newNumeroBS } });
    }
}));
export default router;
//# sourceMappingURL=bonSorties.router.js.map