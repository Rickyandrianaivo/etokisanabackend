import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { TransactionModel } from "../models/transaction.model.js";
import nodemailer from "nodemailer";
import hbs from 'nodemailer-express-handlebars';
import { UserModel } from "../models/user.model.js";

const router = Router();


router.post("/add",expressAsyncHandler(async(req,res)=>{
    const {
        userId,
        siteDepartId,
        siteArriveId,
        typeES,
        montantTotal,
        statut,
        productList,
    } = req.body;
    const newTransaction = {
        userId,
        siteDepartId,
        siteArriveId,
        typeES,
        montantTotal,
        statut,
        productList,
    }
    const currentUser = await UserModel.findOne({_id : userId})

    let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 465,
            secure: true, // true for port 465, false for other ports
            auth: {
              user: process.env.EMAIL_USERNAME,
              pass: process.env.EMAIL_PASSWORD
            },
          });
          transporter.use("compile",hbs({
            viewEngine: {
              extname:'.handlebars',
              partialsDir:'./Utils/Emails/Template',
              layoutsDir:'./Utils/Emails/Template',
              defaultLayout: 'baseMail'
            },
            viewPath : "./Utils/Emails/Template/",
            extName : '.handlebars'
        
          }))
          let info = {};
            if (typeES == "Dépôt") {
            info = {
                    from: 'Etokisana <contact@commercegestion.com>', // sender address
                    to: currentUser?.userEmail, // list of receivers
                    subject: "Bienvenue sur Etokisana", // Subject line
                    template: "Deposit",
                    context : {
                    name : currentUser?.userFirstname,
                    montant : montantTotal,
                    }
                };
            }
            if (typeES == "Retrait") {
            info = {
                    from: 'Etokisana <contact@commercegestion.com>', // sender address
                    to: currentUser?.userEmail, // list of receivers
                    subject: "Bienvenue sur Etokisana", // Subject line
                    template: "Withdraw",
                    context : {
                    name : currentUser?.userFirstname,
                    montant : montantTotal,
                    }
                };
    
            }
            await transporter.sendMail(info,(error,info)=>{
              if (error) {
                  console.log(info);
                  console.log(error);
                  res.status(500).send('Error sendig mail:'+ error)
              }   else{
                  console.log("Email sent" + info.response);
                  res.status(200).send("Email sent successfully")
              }
            })
    await TransactionModel.create(newTransaction);
    res.send(newTransaction).status(200)
}))
router.get("/", expressAsyncHandler(async(req,res)=>{
    const transactions = await TransactionModel.find();
    res.send(transactions).status(200);
    
}))
router.get("/user/:id", expressAsyncHandler(async(req,res)=>{
    const transactions = await TransactionModel.find({userId: req.params['id']});
    res.send(transactions).status(200);
    
}))
router.patch("/update/:id",expressAsyncHandler(async(req,res)=>{
    const updatedTransaction = await TransactionModel.updateOne({_id : req.params['id']},{$set : req.body})
    res.send(updatedTransaction)
}))
router.delete("/delete/:id",expressAsyncHandler(async(req,res)=>{
    res.send().status(200);
}))

export default router;