import  asyncHandler  from 'express-async-handler';
import { Router } from "express";
import { PointDeVenteModel } from '../models/pointDeVente.model';
import { BonEntreeDetails, BonEntreeDetailsModel } from '../models/bonEntreeDetails.model';
import { ArticleModel } from '../models/article.models';

const router = Router();

router.get("/",asyncHandler(async(req, res) =>{
        const allBonEntreesDetails = await BonEntreeDetailsModel.find().populate('article')
    res.send(allBonEntreesDetails);
    })
)

router.get("/:numeroDocument",asyncHandler(async(req,res)=>{
        const bonEntreeDetailsByNumDoc = await BonEntreeDetailsModel.find({bonEntreeNumDoc : req.params['numeroDocument']}).populate('article');
    res.send(bonEntreeDetailsByNumDoc);
    })
)

router.post("/create",asyncHandler(async(req,res) => {
        const { 
            article,
            quantiteCommande,
            quantiteEntree,
            montantNetHT,
            montantTVA,
            montantNetTTC,
            bonEntreeNumDoc} = req.body;

            const newBonEntreeDetail : BonEntreeDetails = {
                article : article._id,
                quantiteCommande,
                quantiteEntree,
                montantNetHT,
                montantTVA,
                montantNetTTC,
                bonEntreeNumDoc
            }
        const theArticle = await ArticleModel.findOne({_id : article._id})
        if (theArticle) {
            const newQteStock = theArticle.qteEnStock + quantiteEntree;
            await ArticleModel.updateOne({_id : article._id},{$set : {qteEnStock : newQteStock}});
        }
        await BonEntreeDetailsModel.create(newBonEntreeDetail);
        const pointDeVente = await PointDeVenteModel.findOne();
        if (pointDeVente) {
            const newNumeroMvStock = pointDeVente.numeroMouvementStock + 1;
            await PointDeVenteModel.updateOne({_id : pointDeVente._id},{$set : {numeroMouvementStock:newNumeroMvStock}})
        }
    }
))

export default router;