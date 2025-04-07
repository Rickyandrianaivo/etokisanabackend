import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { TransactionModel } from "../models/transaction.model.js";
const router = Router();
router.post("/add", expressAsyncHandler(async (req, res) => {
    const { userId, tiersId, codeProduit, typeES, produitId, libelle, montant, statut, siteId } = req.body;
    const newTransaction = {
        userId,
        tiersId,
        codeProduit,
        typeES,
        produitId,
        libelle,
        montant,
        statut,
        siteId
    };
    await TransactionModel.create(newTransaction);
    res.send(newTransaction).status(200);
}));
router.get("/", expressAsyncHandler(async (req, res) => {
    const transactions = await TransactionModel.find();
    res.send(transactions).status(200);
}));
router.get("/user/:id", expressAsyncHandler(async (req, res) => {
    const transactions = await TransactionModel.find({ userId: req.params['id'] });
    res.send(transactions).status(200);
}));
router.put("/update/:id", expressAsyncHandler(async (req, res) => {
    const { userId, tiersId, codeProduit, typeES, produitId, libelle, montant, statut, siteId } = req.body;
    const updatedTransaction = await TransactionModel.updateOne({ _id: req.params['id'] }, {
        userId,
        tiersId,
        codeProduit,
        typeES,
        produitId,
        libelle,
        montant,
        statut,
        siteId
    });
    res.send(updatedTransaction);
}));
router.delete("/delete/:id", expressAsyncHandler(async (req, res) => {
    res.send().status(200);
}));
export default router;
//# sourceMappingURL=transaction.router.js.map