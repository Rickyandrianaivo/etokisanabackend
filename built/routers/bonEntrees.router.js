import asyncHandler from 'express-async-handler';
import { Router } from "express";
import { BonEntreeModel } from '../models/bonEntree.model';
import { PointDeVenteModel } from '../models/pointDeVente.model';
const router = Router();
router.get("/:dateDu/:dateAu", asyncHandler(async (req, res) => {
    const dateDu = req.params['dateDu'];
    const dateAu = req.params['dateAu'];
    if (dateDu && dateAu) {
        res.send(await BonEntreeModel.find({ date: { $gte: dateDu, $lte: dateAu } }));
    }
    else {
        res.send(await BonEntreeModel.find());
    }
}));
router.get("/", asyncHandler(async (req, res) => {
    res.send(await BonEntreeModel.find());
}));
router.get("/:numeroDocument", asyncHandler(async (req, res) => {
    res.send(await BonEntreeModel.findOne({ numeroDocument: req.params['numeroDocument'] }));
}));
router.post("/create", asyncHandler(async (req, res) => {
    const { numeroDocument, date, typeDocument, codeSociete, depot, valide, bonEntreesDetails } = req.body;
    const newBonEntree = {
        numeroDocument,
        date,
        typeDocument,
        codeSociete,
        depot,
        valide,
        bonEntreesDetails
    };
    await BonEntreeModel.create(newBonEntree);
    const pointDeVente = await PointDeVenteModel.findOne();
    if (pointDeVente) {
        const newNumeroBE = pointDeVente.numeroBE + 1;
        await PointDeVenteModel.updateOne({ _id: pointDeVente.id }, { $set: { numeroBE: newNumeroBE } });
    }
}));
export default router;
//# sourceMappingURL=bonEntrees.router.js.map