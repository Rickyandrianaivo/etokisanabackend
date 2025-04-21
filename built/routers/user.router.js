import { Router } from "express";
import asyncHandler from "express-async-handler";
import { UserModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TokenModel } from "../models/token.models.js";
import { randomBytes } from "crypto";
import nodemailer from "nodemailer";
import hbs from 'nodemailer-express-handlebars';
const bcryptSalt = process.env.BCRYPT_SALT;
const clientURL = process.env.CLIENT_URL;
const router = Router();
router.get("/user-confirmation/:token", asyncHandler(async (req, res) => {
    const verified = await TokenModel.findOne({ token: req.params['token'] });
    if (verified) {
        console.log(verified);
        const user = await UserModel.findOne({ _id: verified.userId });
        if (user) {
            const activatedUser = {
                userName: user.userName,
                userFirstname: user.userFirstname,
                userPassword: user.userPassword,
                userEmail: user.userEmail,
                userPhone: user.userPhone,
                userEmailVerified: true,
                userType: user.userType,
                userTotalSolde: user.userTotalSolde,
                userAccess: user.userAccess,
                userParainID: user.userParainID,
                userValidated: user.userValidated,
                // userDescritpion : user.userDescritpion,
                // userImage : user.userImage,
                // userDateOfBirth : user.userDateOfBirth,
                // userLogo : user.userLogo,
                // userStatut : user.userStatut,
                // userManager : user.userManager,
                // userNif : user. userNif,
                // userRC : user. userRC,
                // identityDocumentType : user.identityDocumentType,
                // identityCardNumber : user.identityCardNumber,
                // userAdmin : user.userAdmin,
                // userAddress : user.userAddress,
                // userIdentityCode : user.userIdentityCode,
            };
            await UserModel.updateOne({ _id: verified.userId }, activatedUser);
            console.log();
            await TokenModel.deleteOne({ token: verified.token });
            res.status(200).send("Token Effacer");
        }
    }
    else {
        res.status(404).send("Token Introuvable");
    }
}));
router.post("/register/", asyncHandler(async (req, res) => {
    let tokenInfo;
    const { userName, userFirstname, userPassword, userEmail, userPhone, userAccess, userParainID, userType, userDateOfBirth, userAddress, userMainLat, userMainLng, userID, userDescritpion, userEmailVerified, userValidated, userImage, userLogo, userStatut, userManager, userNif, userRC, identityDocumentType, identityCardNumber, userAdmin, } = req.body;
    const user = await UserModel.findOne({ userEmail: userEmail.toLowerCase() });
    if (user) {
        res.send("Ce nom est déjà utilisé!");
        return;
    }
    else {
        const encryptedPassword = await bcrypt.hash(userPassword, 10);
        const generatedID = Math.random().toString(36).slice(2);
        const newUser = {
            userName,
            userFirstname,
            userPassword: encryptedPassword,
            userEmail: userEmail.toLowerCase(),
            userPhone,
            userTotalSolde: 0,
            userType,
            userAccess,
            userParainID,
            userValidated: false,
            userEmailVerified: false,
            userAddress,
            userDateOfBirth,
            userMainLat,
            userMainLng,
            userID: generatedID,
            // userDescritpion,
            // userImage,
            // userLogo,
            // userStatut,
            // userManager,
            // userNif ,
            // userRC ,
            // identityDocumentType,
            // identityCardNumber,
            // userAdmin,
        };
        const userDb = await UserModel.create(newUser);
        tokenInfo = generateTokenResponse(userDb);
        const tokenDB = {
            userId: tokenInfo._id,
            token: tokenInfo.token,
            // createdAt : new Date()
        };
        await TokenModel.create(tokenDB);
    }
    const verificationLink = "https://www.commercegestion.com/#/user-confirmation/" + tokenInfo.token;
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
router.get("/new", asyncHandler(async (req, res) => {
    const userNewList = await UserModel.find({ userValidated: false });
    res.status(200).send(userNewList);
}));
router.patch("/validate/:id", asyncHandler(async (req, res) => {
    const userId = req.params['id'];
    await UserModel.updateOne({ _id: userId }, { $set: { userValidated: true } });
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
router.get("/token/:token", asyncHandler(async (req, res) => {
    const token = req.params['token'];
    const tokenUserId = await TokenModel.findOne({ token });
    if (tokenUserId) {
        const userConcerned = await UserModel.findOne({ _id: tokenUserId.userId });
        res.send(userConcerned).status(200);
    }
}));
router.put("/passwordReset", asyncHandler(async (req, res) => {
    const { id, token, password } = req.body;
    console.log(id, token, password);
    let passwordResetToken = await TokenModel.findOne({ userId: id });
    let user = await UserModel.findOne({ _id: id });
    if (!passwordResetToken) {
        throw new Error("Invalid or expired password reset token");
    }
    const isValid = await bcrypt.compare(token, passwordResetToken.token);
    if (!isValid) {
        throw new Error("Invalid or expired password reset token");
    }
    const hash = await bcrypt.hash(password, Number(bcryptSalt));
    if (user) {
        const updatePassword = await UserModel.updateOne({ _id: id }, { $set: {
                userName: user.userName,
                userFirstname: user.userFirstname,
                userPassword: hash,
                userEmail: user.userEmail,
                userPhone: user.userPhone,
                userEmailValidated: user.userEmailVerified,
                userType: user.userType,
                userTotalSolde: user.userTotalSolde,
            }
        });
        if (updatePassword) {
            await passwordResetToken.deleteOne({ token: token });
        }
    }
    if (user) {
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
                defaultLayout: 'resetPassword'
            },
            viewPath: "./Utils/Emails/Template/",
            extName: '.handlebars'
        }));
        let info = {
            from: 'Etokisana <contact@commercegestion.com>', // sender address
            to: user.userEmail, // list of receivers
            subject: "Réinitialisation du mot de passe", // Subject line
            template: "baseMail",
            context: {
                name: user.userFirstname,
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
    }
    res.send('Password reseted');
}));
router.post("/requestResetPwd", asyncHandler(async (req, res) => {
    const { email } = req.body;
    // console.log(email+ " " + userId)
    const user = await UserModel.findOne({ userEmail: email });
    if (!user) {
        throw new Error("L'utilisateur n'existe pas");
    }
    let token = await TokenModel.findOne({ _id: user._id });
    if (token) {
        await token.deleteOne();
    }
    ;
    let resetToken = randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, Number(bcryptSalt));
    await new TokenModel({
        userId: user._id,
        token: hash,
        // createdAt: Date.now(),
    }).save();
    //on envoi le token non crypté pour le comparer avec le token crypté de la base de donnée
    const link = `${clientURL}/#/passwordReset/${resetToken}/${user._id}`;
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
            defaultLayout: 'requestResetPassword'
        },
        viewPath: "./Utils/Emails/Template/",
        extName: '.handlebars'
    }));
    let info = {
        from: 'Etokisana <contact@commercegestion.com>', // sender address
        to: user.userEmail, // list of receivers
        subject: "Réinitialisation du mot de passe", // Subject line
        template: "baseMail",
        context: {
            name: user.userFirstname,
            link: link,
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
            res.status(200).send('Email sent successfully');
        }
    });
}));
router.get("", asyncHandler(async (req, res) => {
    const users = await UserModel.find();
    res.send(users);
}));
router.get("/id/:id", asyncHandler(async (req, res) => {
    const userId = req.params['id'];
    const user = await UserModel.findOne({ _id: userId });
    console.log(user);
    res.send(user);
}));
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
router.patch("/update/:id", asyncHandler(async (req, res) => {
    const userId = req.params['id'];
    const { userName, userFirstname, userPassword, userEmail, userPhone, userDescritpion, userGender, userImage, userValidated, userDateOfBirth, userTotalSolde, userAddress, userMainLat, userMainLng, userID,
    // userLogo,
    // userStatut,
    // userManager,
    // userNif ,
    // userRC ,
    // identityDocumentType,
    // identityCardNumber,
    // userAdmin,
     } = req.body;
    await UserModel.updateOne({ _id: userId }, {
        userName,
        userFirstname,
        userPassword,
        userEmail: userEmail.toLowerCase(),
        userPhone,
        userDescritpion,
        userGender,
        userImage,
        userValidated,
        userDateOfBirth,
        userTotalSolde,
        userAddress,
        userMainLat,
        userMainLng,
        userID,
        // userLogo,
        // userStatut,
        // userManager,
        // userNif ,
        // userRC ,
        // identityDocumentType,
        // identityCardNumber,
        // userAdmin,
    });
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