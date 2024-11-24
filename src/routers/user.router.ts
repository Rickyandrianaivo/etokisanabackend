import { Router } from "express";
import asyncHandler from "express-async-handler";
import { User, UserModel } from "../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router = Router();

router.post("/register/",asyncHandler(async(req, res) => {

    const {
        userName,
        userFirstname,
        userPassword,
        userEmail,
        userPhone,
        userDescritpion,
        userGender,
        userImage,
        userEnabled,
        userDateOfBirth,
        userTotalSolde,
        userLogo,
        userStatut,
        userManager,
        userNif ,
        userRC ,
        identityDocumentType,
        identityCardNumber,
        userAdmin,
        userAddress ,
        userIdentityCode,} = req.body;
    const user = await UserModel.findOne({userName : userName});

    if(user){
        res.send("Ce nom est déjà utilisé!");
        return;
    }

    const encryptedPassword = await bcrypt.hash(userPassword,10);
    const newUser:User = {
        userName,
        userFirstname,
        userPassword: encryptedPassword,
        userEmail:userEmail.toLowerCase(),
        userPhone,
        userDescritpion,
        userGender,
        userImage,
        userEnabled,
        userDateOfBirth,
        userTotalSolde,
        userLogo,
        userStatut,
        userManager,
        userNif ,
        userRC ,
        identityDocumentType,
        identityCardNumber,
        userAdmin,
        userAddress ,
        userIdentityCode,
    }
    const dbUser = await UserModel.create(newUser);
    // res.send(generateTokenResponse(dbUser));
}))

const generateTokenResponse = (user:any) =>{
    const token = jwt.sign({
        _id: user._id,
        userEmail:user.userEmail,
        userName: user.userName,
        userFirstname:user.userFirstname,
        userPhone:user.userPhone,
    },process.env.JWT_SECRET!,{
        expiresIn:"30d"
    });
    return {
        _id             : user._id,
        userEmail       : user.userEmail,
        userName        : user.userName,
        userFirstname   : user.userFirstname,
        userPhone       : user.userPhone,
        userDescritpion : user.userDescription,
        userGender      : user.userGender,
        userTotalSolde  : user.userTotalSolde,
        userStatut      : user.userStatut,
        userManager     : user.userManager,
        userNif         : user.userNif,
        userRC          : user.userRC ,
        token           : token
    };
}

router.get("", asyncHandler(async(req, res) => {
    const users = await UserModel.find();
    res.send(users);
}))
router.get("/:id", asyncHandler(async(req, res) => {
    const userId = req.params['id'];
    const user = await UserModel.findOne({_id : userId});
    res.send(user);
}))
router.get("/email/:email", asyncHandler(async(req, res) => {
    const userEmail = req.params['email'];
    const user = await UserModel.findOne({userEmail : userEmail});
    res.send(user);
}))

router.post("/login",asyncHandler(async(req,res) => {
    const {userEmail,userPassword} = req.body;
    const user = await UserModel.findOne({userEmail})
    if (user && (await bcrypt.compare(userPassword,user.userPassword))) {
        res.send(generateTokenResponse(user));
        
    }else{
        res.status(404).send("User name or password is not valid!")
    }
}))

router.put("/update/:id",asyncHandler(async(req,res) => {
    const userId = req.params['id'];
    const {
        userName,
        userFirstname,
        userPassword,
        userEmail,
        userPhone,
        userDescritpion,
        userGender,
        userImage,
        userEnabled,
        userDateOfBirth,
        userTotalSolde,
        userLogo,
        userStatut,
        userManager,
        userNif ,
        userRC ,
        identityDocumentType,
        identityCardNumber,
        userAdmin,
        userAddress ,
        userIdentityCode,
    } = req.body;
    const userUpdates = {
        userName,
        userFirstname,
        userPassword,
        userEmail:userEmail.toLowerCase(),
        userPhone,
        userDescritpion,
        userGender,
        userImage,
        userEnabled,
        userDateOfBirth,
        userTotalSolde,
        userLogo,
        userStatut,
        userManager,
        userNif ,
        userRC ,
        identityDocumentType,
        identityCardNumber,
        userAdmin,
        userAddress ,
        userIdentityCode,
        };

    await UserModel.updateOne({id : userId}, userUpdates);
}))

// router.get("/resetTable",asyncHandler(async(req,res)=>{
//     const factureVenteCount = await FactureVenteModel.countDocuments()
//     const factureVenteDetailsCount = await FactureVenteDetailsModel.countDocuments()
//     const bonEntreeCount = await BonEntreeModel.countDocuments()
//     const bonEntreeDetailsCount = await BonEntreeDetailsModel.countDocuments()
//     const bonSortiesCount = await BonSortiesModel.countDocuments()
//     const bonSortiesDetailsCount = await BonSortiesDetailsModel.countDocuments()
//     const inventaireDetailCount = await InventaireDetailModel.countDocuments()
//     const inventaireCount = await InventaireModel.countDocuments()
//     const mouvementStockCount = await MouvementStockModel.countDocuments()
//     if (factureVenteCount > 0 ||
//         factureVenteDetailsCount >0 ||
//         bonEntreeCount > 0 || 
//         bonEntreeDetailsCount > 0||
//         bonSortiesCount > 0 ||
//         bonSortiesDetailsCount > 0||
//         inventaireDetailCount > 0||
//         inventaireCount > 0 ||
//         mouvementStockCount > 0) 
//     {
//         await FactureVenteModel.deleteMany({})
//         await FactureVenteDetailsModel.deleteMany({})
//         await BonEntreeModel.deleteMany({})
//         await BonEntreeDetailsModel.deleteMany({})
//         await BonSortiesModel.deleteMany({})
//         await BonSortiesDetailsModel.deleteMany({})
//         await InventaireDetailModel.deleteMany({})
//         await InventaireModel.deleteMany({})
//         await MouvementStockModel.deleteMany({})
//         await PointDeVenteModel.updateOne({},{
//             $set : {
//                 numeroBE:1,
//                 numeroBS:1,
//                 numeroInventaire:1,
//                 numeroMouvementStock:1,
//                 numeroVente:1
//             }})
//         res.status(200).send("reset is done !")
//     }else{
//         res.send("No item to delete")
//     }
    
// }))

export default router;