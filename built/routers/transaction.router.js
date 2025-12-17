"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const express_async_handler_1 = tslib_1.__importDefault(require("express-async-handler"));
const transaction_model_1 = require("../models/transaction.model");
const user_model_1 = require("../models/user.model");
// import { SendEmail } from "../Utils/Emails/sendEmail.js";
const router = (0, express_1.Router)();
router.post("/add", (0, express_async_handler_1.default)(async (req, res) => {
    const { userId, siteDepartId, siteArriveId, typeES, montantTotal, statut, productList, } = req.body;
    const newTransaction = {
        userId,
        siteDepartId,
        siteArriveId,
        typeES,
        montantTotal,
        statut,
        productList,
    };
    const currentUser = await user_model_1.UserModel.findOne({ _id: userId });
    if (currentUser && typeES == "Dépôt") {
        // SendEmail(
        //   // "baseMail","Deposit",
        //   currentUser.userEmail,"Transaction réussie",
        //   // {
        //   //   name : currentUser.userFirstname,
        //   //   montant : montantTotal,
        //   // }
        // )
    }
    if (currentUser && typeES == "Retrait") {
        // SendEmail(
        //   // "baseMail","Withdraw",
        //   currentUser.userEmail,"Transaction réussie",
        //   // {
        //   //   name : currentUser.userFirstname,
        //   //   montant : montantTotal,
        //   // }
        // )
    }
    await transaction_model_1.TransactionModel.create(newTransaction);
    res.send(newTransaction).status(200);
}));
router.get("/", (0, express_async_handler_1.default)(async (req, res) => {
    const transactions = await transaction_model_1.TransactionModel.find();
    res.send(transactions).status(200);
}));
router.get("/id/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const transaction = await transaction_model_1.TransactionModel.findOne({ _id: req.params['id'] });
    res.send(transaction).status(200);
}));
router.get("/user/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const transactions = await transaction_model_1.TransactionModel.find({ userId: req.params['id'] });
    res.send(transactions).status(200);
}));
router.patch("/update/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const updatedTransaction = await transaction_model_1.TransactionModel.updateOne({ _id: req.params['id'] }, { $set: req.body });
    res.send(updatedTransaction).status(200);
}));
router.delete("/delete/:id", (0, express_async_handler_1.default)(async (req, res) => {
    res.send().status(200);
}));
exports.default = router;
//# sourceMappingURL=transaction.router.js.map