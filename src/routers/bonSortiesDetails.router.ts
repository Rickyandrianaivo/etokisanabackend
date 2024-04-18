import  asyncHandler  from 'express-async-handler';
import { Router } from "express";
import { PointDeVenteModel } from '../models/pointDeVente.model';
import { ArticleModel } from '../models/article.model';
import { BonSortiesDetails, BonSortiesDetailsModel } from '../models/bonSortieDetails.model';

const router = Router();

router.get("/",asyncHandler(
    async(req, res) =>{
        const allBonSortiesDetails = await BonSortiesDetailsModel.find().populate('article')
    res.send(allBonSortiesDetails);
    })
)

router.get("/:numeroDocument",asyncHandler(
    async(req, res) =>{
        const allBonSortiesDetailsByNumDoc = await BonSortiesDetailsModel.find({bonSortieNumDoc : req.params['numeroDocument']}).populate('article');
        res.send(allBonSortiesDetailsByNumDoc);
    })
)

router.post("/create",asyncHandler(
    async(req,res) => {
        const { 
            article,
            quantiteCommande,    
            quantiteSortie,      
            prixDeVenteHT, 
            montantNetHT,        
            montantTVA,          
            montantNetTTC,       
            bonSortieNumDoc} = req.body;
        
        const newBonSortieDetail : BonSortiesDetails = {
            article : article._id,
            quantiteCommande,    
            quantiteSortie,      
            prixUnitaireVenteHT : prixDeVenteHT, 
            montantNetHT,        
            montantTVA,          
            montantNetTTC,       
            bonSortieNumDoc
        }
        const theArticle = await ArticleModel.findOne({_id : article._id})
        if (theArticle) {
            const newQteStock = theArticle.qteEnStock - quantiteSortie;
            await ArticleModel.updateOne({_id : article._id},{$set : {qteEnStock : newQteStock}}); 
        }
        await BonSortiesDetailsModel.create(newBonSortieDetail);
        const pointDeVente = await PointDeVenteModel.findOne();
        if (pointDeVente) {
            const newNumeroMvStock = pointDeVente.numeroMouvementStock + 1;
            await PointDeVenteModel.updateOne({_id : pointDeVente._id},{$set : {numeroMouvementStock:newNumeroMvStock}})
        }
    }
))

export default router;