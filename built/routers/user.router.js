import { Router } from "express";
import asyncHandler from "express-async-handler";
import { UserModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TokenModel } from "../models/token.models.js";
import { randomBytes } from "crypto";
import { sendEmail } from "../Utils/Emails/sendEmail.js";
import nodemailer from "nodemailer";
import hbs from 'nodemailer-express-handlebars';
const bcryptSalt = process.env.BCRYPT_SALT;
const clientURL = process.env.CLIENT_URL;
const router = Router();
router.get("/user-confirmation/:token/:id", asyncHandler(async (req, res) => {
    const verified = await TokenModel.findOne({ token: req.params['token'] });
    if (verified) {
        await TokenModel.deleteOne({ token: req.params['token'] });
        await UserModel.updateOne({ _id: req.params['id'] }, { userEnabled: true });
    }
}));
router.post("/register/", asyncHandler(async (req, res) => {
    let tokenInfo;
    const { userName, userFirstname, userPassword, userEmail, userPhone, userDescritpion, userType, userImage, userDateOfBirth, userLogo, userStatut, userManager, userNif, userRC, identityDocumentType, identityCardNumber, userAdmin, userAddress, userIdentityCode, } = req.body;
    const user = await UserModel.findOne({ userEmail: userEmail.toLowerCase() });
    if (user) {
        res.send("Ce nom est déjà utilisé!");
        return;
    }
    else {
        const encryptedPassword = await bcrypt.hash(userPassword, 10);
        const newUser = {
            userName,
            userFirstname,
            userPassword: encryptedPassword,
            userEmail: userEmail.toLowerCase(),
            userPhone,
            userDescritpion,
            userType,
            userImage,
            userEnabled: false,
            userDateOfBirth,
            userTotalSolde: 0,
            userLogo,
            userStatut,
            userManager,
            userNif,
            userRC,
            identityDocumentType,
            identityCardNumber,
            userAdmin,
            userAddress,
            userIdentityCode,
        };
        const userDb = await UserModel.create(newUser);
        tokenInfo = generateTokenResponse(userDb);
        const tokenDB = {
            id: tokenInfo._id,
            token: tokenInfo.token,
            createdAt: new Date()
        };
        await TokenModel.create(tokenDB);
    }
    const verificationLink = "https://www.commercegestion.com/user-confirmation/" + tokenInfo.token;
    // const verificationLink = "https://www.commercegestion.com/user-confirmation/"+ tokenInfo.token+'/'+tokenInfo._id
    // Sending mail
    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        },
    });
    transporter.use("compile", hbs({
        viewEngine: {
            extname: '.handlebars',
            partialsDir: './Utils/Emails/Template',
            layoutsDir: './Utils/Emails/Template',
            defaultLayout: 'baseMail'
        },
        viewPath: "./Utils/Emails/Template/",
        extName: '.handlebars'
    }));
    let info = {
        from: 'Etokisana <contact@commercegestion.com>', // sender address
        to: userEmail, // list of receivers
        subject: "Bienvenue sur Etokisana", // Subject line
        template: "welcome",
        context: {
            name: userFirstname,
            link: verificationLink,
        }
    };
    await transporter.sendMail(info, (error, info) => {
        if (error) {
            console.log(info);
            console.log(error);
            res.status(500).send('Error sendig mail:' + error);
        }
        else {
            console.log("Email sent" + info.response);
            res.status(200).send("Email sent successfully");
        }
    });
}));
const generateTokenResponse = (user) => {
    const token = jwt.sign({
        _id: user._id,
        userEmail: user.userEmail,
        userPhone: user.userPhone,
    }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
    return {
        _id: user._id,
        userEmail: user.userEmail,
        userName: user.userName,
        userFirstname: user.userFirstname,
        userPhone: user.userPhone,
        userDescritpion: user.userDescription,
        userGender: user.userGender,
        userTotalSolde: user.userTotalSolde,
        userStatut: user.userStatut,
        userManager: user.userManager,
        userNif: user.userNif,
        userRC: user.userRC,
        token: token
    };
};
const resetPassword = async (userId, token, password) => {
    let passwordResetToken = await TokenModel.findOne({ userId });
    if (!passwordResetToken) {
        throw new Error("Invalid or expired password reset token");
    }
    const isValid = await bcrypt.compare(token, passwordResetToken.token);
    if (!isValid) {
        throw new Error("Invalid or expired password reset token");
    }
    const hash = await bcrypt.hash(password, Number(bcryptSalt));
    await UserModel.updateOne({ _id: userId }, { $set: { password: hash } }, { new: true });
    const user = await UserModel.findById({ _id: userId });
    sendEmail(user.userEmail, "Password Reset Successfully", {
        name: user.userName,
    }, "./template/resetPassword.handlebars");
    await passwordResetToken.deleteOne();
    return true;
};
router.get("/token/:token", asyncHandler(async (req, res) => {
    const token = req.params['token'];
    const tokenUserId = await TokenModel.findOne({ token });
    if (tokenUserId) {
        res.send(tokenUserId._id);
    }
}));
// trouver à quelle moment le mot de passe doit être entrer et ou dirige le liende reinitialisation
router.post("/passwordReset/", asyncHandler(async (req, res) => {
    const { id, token, password } = req.body;
    resetPassword(id, token, password);
}));
router.post("/requestResetPwd", asyncHandler(async (req, res) => {
    const { email, userId } = req.body;
    // console.log(email+ " " + userId)
    const user = await UserModel.findOne({ userEmail: email });
    if (!user) {
        throw new Error("L'utilisateur n'existe pas");
    }
    let token = await TokenModel.findOne({ _id: userId });
    if (token) {
        await token.deleteOne();
    }
    ;
    let resetToken = randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, Number(bcryptSalt));
    await new TokenModel({
        id: user._id,
        token: hash,
        createdAt: Date.now(),
    }).save();
    const link = `${clientURL}/passwordReset?token=${resetToken}&id=${user._id}`;
    sendEmail(user.userEmail, "Password Reset Request", { name: user.userName, link: link }, "./template/requestResetPassword.handlebars");
    res.send(link);
}));
router.get("", asyncHandler(async (req, res) => {
    const users = await UserModel.find();
    res.send(users);
}));
// router.get("/:id", asyncHandler(async(req, res) => {
//     const userId = req.params['id'];
//     const user = await UserModel.findOne({_id : userId});
//     res.send(user);
// }))
router.get("/email/:email", asyncHandler(async (req, res) => {
    const userEmail = req.params['email'];
    const user = await UserModel.findOne({ userEmail: userEmail });
    res.send(user);
}));
router.post("/login", asyncHandler(async (req, res) => {
    const { userEmail, userPassword } = req.body;
    const user = await UserModel.findOne({ userEmail });
    if (user && (await bcrypt.compare(userPassword, user.userPassword))) {
        res.send(generateTokenResponse(user));
    }
    else {
        res.status(404).send("User name or password is not valid!");
    }
}));
router.put("/update/:id", asyncHandler(async (req, res) => {
    const userId = req.params['id'];
    const { userName, userFirstname, userPassword, userEmail, userPhone, userDescritpion, userGender, userImage, userEnabled, userDateOfBirth, userTotalSolde, userLogo, userStatut, userManager, userNif, userRC, identityDocumentType, identityCardNumber, userAdmin, userAddress, userIdentityCode, } = req.body;
    const userUpdates = {
        userName,
        userFirstname,
        userPassword,
        userEmail: userEmail.toLowerCase(),
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
        userNif,
        userRC,
        identityDocumentType,
        identityCardNumber,
        userAdmin,
        userAddress,
        userIdentityCode,
    };
    await UserModel.updateOne({ id: userId }, userUpdates);
}));
//reset tables{
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
//# sourceMappingURL=user.router.js.map