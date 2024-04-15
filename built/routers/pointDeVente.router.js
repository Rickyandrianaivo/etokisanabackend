import { Router } from "express";
import asyncHandler from "express-async-handler";
import { PointDeVenteModel } from "../models/pointDeVente.model";
const router = Router();
router.get("/", asyncHandler(async (req, res) => {
    res.send(await PointDeVenteModel.findOne());
}));
router.put("/update", asyncHandler(async (req, res) => {
    const { codeSociete, codeFournisseur, nomPV, emplacement, ordinateur, telephone1, telephone2, telephone3, pointDeVenteActif, dateDeVente, prefixeVente, numeroVente, dateAchat, prefixeAchat, numeroAchat, dateInventaire, prefixeInventaire, numeroInventaire, dateBE, prefixeBE, numeroBE, dateBS, prefixeBS, numeroBS, dateCloture, prefixeCloture, numeroCloture, numeroMouvementStock } = req.body;
    const updatedPV = {
        codeSociete: codeSociete,
        codeFournisseur: codeFournisseur,
        nomPV: nomPV,
        emplacement: emplacement,
        ordinateur: ordinateur,
        telephone1: telephone1,
        telephone2: telephone2,
        telephone3: telephone3,
        pointDeVenteActif: pointDeVenteActif,
        dateDeVente: dateDeVente,
        prefixeVente: prefixeVente,
        numeroVente: numeroVente,
        dateAchat: dateAchat,
        prefixeAchat: prefixeAchat,
        numeroAchat: numeroAchat,
        dateInventaire: dateInventaire,
        prefixeInventaire: prefixeInventaire,
        numeroInventaire: numeroInventaire,
        dateBE: dateBE,
        prefixeBE: prefixeBE,
        numeroBE: numeroBE,
        dateBS: dateBS,
        prefixeBS: prefixeBS,
        numeroBS: numeroBS,
        dateCloture: dateCloture,
        prefixeCloture: prefixeCloture,
        numeroCloture: numeroCloture,
        numeroMouvementStock: numeroMouvementStock,
    };
    await PointDeVenteModel.updateOne(updatedPV);
    res.send("PV updated!");
}));
router.put("/add-vente-detail", asyncHandler(async (req, res) => {
    const pointDeVente = await PointDeVenteModel.findOne();
    if (pointDeVente) {
        const newNumeroVente = pointDeVente.numeroVente + 1;
        const newNumeroMvStock = pointDeVente.numeroMouvementStock + 1;
        await PointDeVenteModel.updateOne({ _id: pointDeVente.id }, { $set: { numeroVente: newNumeroVente, numeroMouvementStock: newNumeroMvStock } });
    }
}));
router.put("/add-bon-entree-detail", asyncHandler(async (req, res) => {
    const pointDeVente = await PointDeVenteModel.findOne();
    if (pointDeVente) {
        const newNumeroBE = pointDeVente.numeroBE + 1;
        const newNumeroMvStock = pointDeVente.numeroMouvementStock + 1;
        await PointDeVenteModel.updateOne({ _id: pointDeVente.id }, { $set: { numeroBS: newNumeroBE, numeroMouvementStock: newNumeroMvStock } });
    }
}));
router.put("/add-bon-sortie-detail", asyncHandler(async (req, res) => {
    const pointDeVente = await PointDeVenteModel.findOne();
    if (pointDeVente) {
        const newNumeroBS = pointDeVente.numeroBS + 1;
        const newNumeroMvStock = pointDeVente.numeroMouvementStock + 1;
        await PointDeVenteModel.updateOne({ _id: pointDeVente.id }, { $set: { numeroBS: newNumeroBS, numeroMouvementStock: newNumeroMvStock } });
    }
}));
export default router;
//# sourceMappingURL=pointDeVente.router.js.map