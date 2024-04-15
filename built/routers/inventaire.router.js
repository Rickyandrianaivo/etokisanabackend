import { Router } from "express";
import asyncHandler from 'express-async-handler';
import { InventaireModel } from '../models/inventaire.model';
import { InventaireDetailModel } from "../models/inventaireDetail.model";
import { sample_inventaireDetails } from "../Inventaire_data";
import { PointDeVenteModel } from "../models/pointDeVente.model";
import { ArticleModel } from "../models/article.models";
const router = Router();
router.get("/", asyncHandler(async (req, res) => {
    res.send(await InventaireModel.find());
}));
router.get("/:dateDu/:dateAu", asyncHandler(async (req, res) => {
    let dateDu = req.params['dateDu'];
    let dateAu = req.params['dateAu'];
    let precInv;
    if (dateDu && dateAu) {
        precInv = await InventaireModel.find({ date: { $gte: dateDu, $lte: dateAu } });
    }
    else {
        precInv = await InventaireModel.find();
    }
    res.send(precInv);
}));
router.get("/:numeroDocument", asyncHandler(async (req, res) => {
    const numeroDocument = req.params['numeroDocument'];
    const inventaireDetails = await InventaireDetailModel.find({ inventaireNumDoc: numeroDocument }).populate("article") ?? new InventaireModel();
    res.send(inventaireDetails);
    4;
}));
router.get("/seed", asyncHandler(async (req, res) => {
    const pV = await PointDeVenteModel.findOne();
    if (pV) {
        const newInventaire = {
            numeroDocument: pV.prefixeInventaire + "000" + pV.numeroInventaire,
            date: new Date(),
            typeDocument: "Inventaire",
            codeSociete: pV.codeSociete,
            depot: pV.nomPV,
            valide: true,
        };
        const newNumInv = pV.numeroInventaire + 1;
        await PointDeVenteModel.updateOne({ _id: pV._id }, { $set: { numeroInventaire: newNumInv } });
        await InventaireModel.create(newInventaire);
        res.send("inventaire created !");
        sample_inventaireDetails.forEach(async (element) => {
            const theArticle = await ArticleModel.findOne({ reference: element.reference });
            if (theArticle) {
                const newInventaireDetails = {
                    article: theArticle.id,
                    stockTheorique: element.stockTheorique,
                    valeurStockTheorique: element.valeurStockTheorique,
                    stockPhysique: element.stockPhysique,
                    nouvelleValeurStock: element.nouvelleValeurStock,
                    ecart: element.ecart,
                    valeurEcart: element.valeurEcart,
                    inventaireNumDoc: element.inventaireNumDoc
                };
                await InventaireDetailModel.create(newInventaireDetails);
            }
        });
        res.send("inventaire details created !");
    }
}));
router.post("/create", asyncHandler(async (req, res) => {
    const { numeroDocument, date, typeDocument, depot, valide, } = req.body;
    const newInventaire = {
        numeroDocument,
        date,
        typeDocument,
        depot,
        etatValidation: valide
    };
    await InventaireModel.create(newInventaire);
    const pV = await PointDeVenteModel.findOne();
    if (pV) {
        const newNumInv = pV.numeroInventaire + 1;
        await PointDeVenteModel.updateOne({ _id: pV._id }, { $set: { numeroInventaire: newNumInv } });
        res.status(200).send("Inventaire created !!");
    }
}));
export default router;
//# sourceMappingURL=inventaire.router.js.map