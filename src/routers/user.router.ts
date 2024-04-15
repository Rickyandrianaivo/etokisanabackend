import { Router } from "express";
import asyncHandler from "express-async-handler";
import { User, UserModel } from "../models/user.models";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { FactureVenteModel } from '../models/factureVente.model';
import { BonEntreeModel } from '../models/bonEntree.model';
import { BonSortiesModel } from '../models/bonSortie.model';
import { BonEntreeDetailsModel, BonEntreeDetailsSchema } from '../models/bonEntreeDetails.model';
import { BonSortiesDetailsModel } from '../models/bonSortieDetails.model';
import { InventaireDetailModel } from '../models/inventaireDetail.model';
import { InventaireModel } from '../models/inventaire.model';
import { FactureVenteDetailsModel } from '../models/factureVenteDetails.model';
import { MouvementStockModel } from '../models/mouvementStock.model';
import { PointDeVenteModel } from '../models/pointDeVente.model';

const router = Router();

router.post("/register/",asyncHandler(async(req, res) => {

    const {name,email,password,phoneNumber,securityLevel} = req.body;
    const user = await UserModel.findOne({name : name});

    if(user){
        res.send("Ce nom est déjà utilisé!");
        return;
    }

    const encryptedPassword = await bcrypt.hash(password,10);
    const newUser:User = {
        name,
        email:email.toLowerCase(),
        password: encryptedPassword,
        phoneNumber,
        securityLevel,
    }

    const dbUser = await UserModel.create(newUser);
    res.send(generateTokenResponse(dbUser));
}))

const generateTokenResponse = (user:any) =>{
    const token = jwt.sign({
        id: user.id, email:user.email,name: user.name,phoneNumber:user.phoneNumber, securityLevel:user.securityLevel
    },process.env.JWT_SECRET!,{
        expiresIn:"30d"
    });
    return {
        id              : user.id,
        email           : user.email,
        name            : user.name,
        phoneNumber     : user.phoneNumber,
        securityLevel   : user.securityLevel,
        token           : token
    };
}

router.get("/", asyncHandler(async(req, res) => {
    const users = await UserModel.find();
    res.send(users);
}))

router.post("/login",asyncHandler(async(req,res) => {
    const {name,password} = req.body;
    const user = await UserModel.findOne({name})
    if (user && (await bcrypt.compare(password,user.password))) {
        res.send(generateTokenResponse(user));
    }else{
        res.status(404).send("User name or password is not valid!")
    }
}))

router.put("/update/:id",asyncHandler(async(req,res) => {
    const userId = req.params['id'];
    const {name,password,email,phoneNumber,securityLevel} = req.body;
    const userUpdates = {name,password,email,phoneNumber,securityLevel};

    await UserModel.updateOne({id : userId}, userUpdates);
}))

router.get("/resetTable",asyncHandler(async(req,res)=>{
    const factureVenteCount = await FactureVenteModel.countDocuments()
    const factureVenteDetailsCount = await FactureVenteDetailsModel.countDocuments()
    const bonEntreeCount = await BonEntreeModel.countDocuments()
    const bonEntreeDetailsCount = await BonEntreeDetailsModel.countDocuments()
    const bonSortiesCount = await BonSortiesModel.countDocuments()
    const bonSortiesDetailsCount = await BonSortiesDetailsModel.countDocuments()
    const inventaireDetailCount = await InventaireDetailModel.countDocuments()
    const inventaireCount = await InventaireModel.countDocuments()
    const mouvementStockCount = await MouvementStockModel.countDocuments()
    if (factureVenteCount > 0 ||
        factureVenteDetailsCount >0 ||
        bonEntreeCount > 0 || 
        bonEntreeDetailsCount > 0||
        bonSortiesCount > 0 ||
        bonSortiesDetailsCount > 0||
        inventaireDetailCount > 0||
        inventaireCount > 0 ||
        mouvementStockCount > 0) 
    {
        await FactureVenteModel.deleteMany({})
        await FactureVenteDetailsModel.deleteMany({})
        await BonEntreeModel.deleteMany({})
        await BonEntreeDetailsModel.deleteMany({})
        await BonSortiesModel.deleteMany({})
        await BonSortiesDetailsModel.deleteMany({})
        await InventaireDetailModel.deleteMany({})
        await InventaireModel.deleteMany({})
        await MouvementStockModel.deleteMany({})
        await PointDeVenteModel.updateOne({},{
            $set : {
                numeroBE:1,
                numeroBS:1,
                numeroInventaire:1,
                numeroMouvementStock:1,
                numeroVente:1
            }})
        res.status(200).send("reset is done !")
    }else{
        res.send("No item to delete")
    }
    
}))

export default router;