import { Router } from "express";
import  asyncHandler  from 'express-async-handler';
import { InventaireModel } from '../models/inventaire.model';
import { InventaireDetailModel } from "../models/inventaireDetail.model";
import { ArticleModel } from "../models/article.model";
import { PointDeVenteModel } from "../models/pointDeVente.model";

const router = Router();

router.get("/:numeroDocument",asyncHandler(async(req,res) =>{
    const numeroDocument = req.params['numeroDocument'];
    const inventaireDetails = await InventaireDetailModel.find({inventaireNumDoc : numeroDocument}) ?? new InventaireModel();
    res.send(inventaireDetails);
}))

router.post("/create",asyncHandler(async(req,res)=>{
    const pV = await PointDeVenteModel.findOne();
    // const articles = await ArticleModel.find();
    const data = req.body;
    if(pV){
        data.forEach(async(element : any) => {
            const inventaireDetail = {
                article             : element.article.id,
                stockTheorique      : element.stockTheorique,
                valeurStockTheorique: element.valeurStockTheorique,
                stockPhysique       : element.stockPhysique,
                nouvelleValeurStock : element.nouvelleValeurStock,
                ecart               : element.ecart,
                valeurEcart         : element.valeurEcart,
                inventaireNumDoc    : element.inventaireNumDoc
            }
            await InventaireDetailModel.create(inventaireDetail)
            await ArticleModel.updateOne({_id : element.article._id},{$set : {qteEnStock : element.stockPhysique}})
        })
    }
    res.status(200).send(`Inventory Details creation is done !`);
}))

router.get("/:numeroDocument/search/:searchTerm",asyncHandler(async(req,res)=>{
    const searchRegex = new RegExp(req.params['searchTerm'], 'i');
    const inventairesDetails = await InventaireDetailModel.find({article : {$regex:searchRegex}});
    res.send(inventairesDetails);
}))

// router.get("/create",asyncHandler(async(req,res) => {
//         const pV = await PointDeVenteModel.findOne();
//         // const articles = await ArticleModel.find();
//         // const pV = await PointDeVenteModel.findOne();
//         // console.log(pV);
//         // if(articles && pV){
//         //     console.log("article & PV : Ok");
//         //     articles.forEach(async(article) => {
//         //         const numDocInv = pV.prefixeInventaire + "000" + pV.numeroInventaire;
//         //         const inventaireDetail = {
//         //             article             : article.id,
//         //             stockTheorique      : article.qteEnStock,
//         //             valeurStockTheorique: article.qteEnStock * article.prixUnitaireVenteTTC,
//         //             stockPhysique       : article.qteEnStock,
//         //             nouvelleValeurStock : article.qteEnStock * article.prixUnitaireVenteTTC,
//         //             Ecart               : 0,
//         //             valeurEcart         : 0,
//         //             inventaireNumDoc    : numDocInv
//         //         }
//         //         await InventaireDetailModel.create(inventaireDetail)
//         //         console.log("Ok");
//         //     })
//         // }
//         // res.send("tonga eto tsika")
//         res.send(pV);
//     }
// ))



export default router;