"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const express_async_handler_1 = tslib_1.__importDefault(require("express-async-handler"));
const user_model_1 = require("../models/user.model");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const bcryptjs_1 = tslib_1.__importDefault(require("bcryptjs"));
const token_models_1 = require("../models/token.models");
const crypto_1 = require("crypto");
const sendEmail_1 = require("../Utils/Emails/sendEmail");
const multer_1 = tslib_1.__importDefault(require("multer"));
const notification_model_1 = require("../models/notification.model");
const site_model_1 = require("../models/site.model");
const nodemailer_1 = tslib_1.__importDefault(require("nodemailer"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const constant_1 = require("../Utils/constant/constant");
dotenv_1.default.config();
const userRouter = (0, express_1.Router)();
const transporter = nodemailer_1.default.createTransport({
    host: "commercegestion.com",
    port: 465,
    secure: true,
    auth: {
        user: "contact@commercegestion.com",
        pass: "Rzh398aNVtFZUu4"
    }
});
const mailOptions = {
    from: 'contact@commercegestion.com', // sender address
    to: "randrianaivo.dominique@gmail.com", // list of receivers
    subject: "Test réussi",
    text: "Test réussi",
    html: "<h1>Test réussi</h1></br> <p>On avance !!</p>"
    // contextObject: contextObject,
};
const sendMail = async (transporter, mailOptions) => {
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent successfully:", info.messageId);
    }
    catch (error) {
        console.log("Error while sending mail:", error);
    }
};
// router.post("/register/",asyncHandler(async(req, res) => {
// const transporter = nodemailer.createTransport({
//   host: "commercegestion.com",
//   port: 465,
//   secure: true, // true for 465, false for other ports
//   auth: {
//     user: "contact@commercegestion.com",
//     pass: "Rzh398aNVtFZUu4",
//   },
// });
// const mailOptions = {
//   from: 'contact@commercegestion.com',
//   to: "randrianaivo.dominique@gmail.com",
//   subject: "inscription randrianaivo ✔",
//   text: "Félicitations ! Votre inscription a été réussie.", // plain‑text body
//   html: "<b>Félicitations ! Votre inscription a été réussie.</b>", // HTML body
// };
// const sendMail = async (transporter:any, mailOptions:any) => {
//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Message sent successfully:", info.messageId);
//   } catch (error) {
//     console.log("Error while sending mail:", error);
//   }
// };
// sendMail(transporter, mailOptions);
// }));
const bcryptSalt = process.env.BCRYPT_SALT;
const clientURL = process.env.CLIENT_URL;
const avatar = (0, multer_1.default)({
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
        if (file.originalname.match(/\.(jpg|png|JPG|PNG|JPEG|jpeg)$/)) {
            return cb(new Error('This is not a correct format of the file'));
        }
        cb(null, true);
    }
});
// router.post('/user-avatar/',avatar.single('avatar'),async(req,res)=>{
//   userImage = req.file?.buffer
// },(err,req,res,next) => res.status(404).send({error:err}))
userRouter.get("/user-confirmation/:token", (0, express_async_handler_1.default)(async (req, res) => {
    const verified = await token_models_1.TokenModel.findOne({ token: req.params['token'] });
    if (verified) {
        console.log(verified);
        const user = await user_model_1.UserModel.findOne({ _id: verified.userId });
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
                // userparrainID : user.userparrainID,
                userValidated: user.userValidated,
                // userDescritpion : user.userDescritpion,
                // userImage : user.userImage,
                // userDateOfBirth : user.userDateOfBirth,
                // userLogo : user.userLogo,
                // userStatut : user.userStatut,
                // userManager : user.userManager,
                // userNif : user. userNif,
                // userRC : user. userRC,
                // identityDocument : user.identityDocument,
                // identityCardNumber : user.identityCardNumber,
                // userAdmin : user.userAdmin,
                // userAddress : user.userAddress,
                // userIdentityCode : user.userIdentityCode,
            };
            await user_model_1.UserModel.updateOne({ _id: verified.userId }, activatedUser);
            console.log();
            await token_models_1.TokenModel.deleteOne({ token: verified.token });
            let newNotification = {
                userId: verified.userId,
                title: "Email vérifié",
                message: "Félicitations ! Votre Email a bien été vérifié",
                state: "new",
            };
            await notification_model_1.NotificationModel.create(newNotification);
            res.status(200).send("Token Effacé");
        }
    }
    else {
        res.status(404).send("Token introuvable");
    }
}));
userRouter.post("/requestVerificationEmail", (0, express_async_handler_1.default)(async (req, res) => {
    let tokenInfo;
    const userInfos = req.body;
    tokenInfo = generateTokenResponse(userInfos);
    const tokenDB = {
        userId: tokenInfo.userId,
        token: tokenInfo.token,
    };
}));
//userRouter.post('/register', asyncHandler(REGISTER));
userRouter.post("/register/", (0, express_async_handler_1.default)(async (req, res) => {
    let tokenInfo;
    let userDb;
    //----------------------
    //Récupération des informations de l'utilisateur
    //----------------------
    const { userNickName, userName, userFirstname, userPassword, userEmail, userPhone, userAccess, 
    // userparrainID,
    userType, userDateOfBirth, userAddress, userMainLat, userMainLng, userId, userEmailVerified, userValidated, userImage, identityDocument, identityCardNumber, documentType, raisonSocial, type, rcs, carteStat, nif, carteFiscal, logo, managerName, managerEmail, parrain1ID, parrain2ID, } = req.body;
    //----------------------
    //Check si l'email est déjà utilisé
    //----------------------
    const user = await user_model_1.UserModel.findOne({ userEmail: userEmail.toLowerCase() });
    if (user) {
        res.status(500).send("Ce nom est déjà utilisé !");
        return;
    }
    else {
        //Criptage du mot de passe
        const encryptedPassword = await bcryptjs_1.default.hash(userPassword, 10);
        const newUser = {
            userNickName,
            userName,
            userFirstname,
            userPassword,
            userEmail: userEmail.toLowerCase(),
            userPhone,
            userTotalSolde: 0,
            userType,
            userAccess,
            // userparrainID,
            userValidated,
            userEmailVerified,
            userAddress,
            userDateOfBirth,
            userMainLat,
            userMainLng,
            userId,
            userImage,
            identityDocument,
            identityCardNumber,
            documentType,
            raisonSocial,
            type,
            rcs,
            carteStat,
            nif,
            carteFiscal,
            logo,
            managerName,
            managerEmail,
            parrain1ID,
            parrain2ID,
        };
        //SendEmail(userEmail,"Test réusssi !!");
        userDb = await user_model_1.UserModel.create(newUser);
        const mailOptions = {
            from: 'contact@commercegestion.com',
            to: "randrianaivo.dominique@gmail.com",
            subject: "inscription ranix ✔",
            text: "Félicitations ! Votre inscription a été réussie.", // plain‑text body
            html: "<b>Félicitations ! Votre inscription a été réussie.</b>", // HTML body
        };
        const sendMail = async (transporter, mailOptions) => {
            try {
                const info = await transporter.sendMail(mailOptions);
                console.log("Message sent successfully:", info.messageId);
            }
            catch (error) {
                console.log("Error while sending mail:", error);
            }
        };
        sendMail(transporter, mailOptions);
        //---------------------------
        //4. Envoi email (async/await propre)
        //---------------------------
        try {
            const sendInfo = await transporter.sendMail(mailOptions);
            if (sendInfo) {
                console.log("Email envoyé : ", sendInfo.messageId);
            }
            else {
                console.log("Erreur lors de l'envoi du mail");
            }
        }
        catch (error) {
            console.error("Erreur lors de l'envoi de l'email : ", error);
        }
    }
    tokenInfo = generateTokenResponse(userDb);
    const tokenDB = {
        userId: tokenInfo._id,
        token: tokenInfo.token,
    };
    await token_models_1.TokenModel.create(tokenDB);
    //Sending mail
    const verificationLink = "https://www.commercegestion.com/#/user-confirmation/" + tokenInfo.token;
    if (userType == "Entreprise") {
        sendMail(transporter, mailOptions);
        (0, sendEmail_1.SendEmail)("baseMail", "ValidationEntrepriseEmail", userEmail, "Bienvenue sur Etokisana", {
            name: raisonSocial,
            link: verificationLink,
        });
    }
    if (userType == "Particulier") {
        sendMail(transporter, mailOptions);
        (0, sendEmail_1.SendEmail)("baseMail", "ValidationEmail", userEmail, "Bienvenue sur Etokisana", {
            name: raisonSocial,
            link: verificationLink,
        });
    }
    let newNotification = {
        userId: userId,
        title: "Inscription en attente",
        message: "Nous vous remercions de votre patience pendant la validation de votre insciption au sein de nos administrateurs",
        state: "new",
    };
    await notification_model_1.NotificationModel.create(newNotification);
    res.status(200).send(['Utilisateur créé !!!']);
}));
userRouter.get("/checkparrain/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const user = await user_model_1.UserModel.findOne({ _id: req.params['id'] });
    if (user) {
        if (user.parrain1ID && user.parrain2ID) {
            await user_model_1.UserModel.updateOne({ _id: req.params['id'] }, { $set: { userValidate: true } });
        }
    }
}));
userRouter.get("/new", (0, express_async_handler_1.default)(async (req, res) => {
    const userNewList = await user_model_1.UserModel.find({ userValidated: false, userAccess: "Utilisateur" });
    res.status(200).send(userNewList);
}));
userRouter.get("/validate/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const userDBId = req.params['id'];
    const userById = await user_model_1.UserModel.findById({ _id: userDBId });
    await user_model_1.UserModel.updateOne({ _id: userDBId }, { $set: { userValidated: true } });
    if (userById?.userType == "Entreprise") {
        // SendEmail(
        //   // "baseMail",
        //   // "welcome",
        //   userById.userEmail,
        //   "Inscription terminée",
        //   // {
        //   //   name : userById.userName,
        //   // }
        // )
    }
    if (userById && userById.userType == "Particulier") {
        // SendEmail(
        //   // "baseMail",
        //   // "welcome",
        //   userById.userEmail,
        //   "Inscription terminée",
        //   // {
        //   //   name : userById.userName,
        //   // }
        // )
    }
    // let newNotification = {
    //     userId  : userById?.userId,
    //     title   : "Inscritpion réussie !",
    //     message : "Félicitations ! Vous faites maintenant partie de la grande famille de notre plateforme.",
    //     states  : "new",
    // }
    // await NotificationModel.create(newNotification);
    res.status(200).send(userById?.userId);
}));
const generateTokenResponse = (user) => {
    const token = jsonwebtoken_1.default.sign({
        _id: user._id,
        userEmail: user.userEmail,
        userPhone: user.userPhone,
    }, constant_1.JWT_SECRET, {
        expiresIn: "30d"
    });
    return {
        _id: user._id,
        userNickName: user.userNickName,
        userId: user.userId,
        userEmail: user.userEmail,
        userName: user.userName,
        userFirstname: user.userFirstname,
        userPhone: user.userPhone,
        userTotalSolde: user.userTotalSolde,
        userStatut: user.userStatut,
        raisonSocial: user.raisonSocial,
        type: user.type,
        rcs: user.rcs,
        nif: user.nif,
        managerName: user.managerName,
        managerEmail: user.managerEmail,
        token: token
    };
};
userRouter.get("/token/:token", (0, express_async_handler_1.default)(async (req, res) => {
    const token = req.params['token'];
    const tokenUserId = await token_models_1.TokenModel.findOne({ token });
    if (tokenUserId) {
        const userConcerned = await user_model_1.UserModel.findOne({ _id: tokenUserId.userId });
        res.send(userConcerned).status(200);
    }
}));
userRouter.patch("/passwordReset", (0, express_async_handler_1.default)(async (req, res) => {
    const { token, id, password } = req.body;
    console.log(id, token, password);
    let passwordResetToken = await token_models_1.TokenModel.findOne({ userId: id });
    let user = await user_model_1.UserModel.findOne({ _id: id });
    if (!passwordResetToken) {
        throw new Error("Mot de passe incorrect !");
    }
    const isValid = await bcryptjs_1.default.compare(token, passwordResetToken.token);
    if (!isValid) {
        throw new Error("Mot de passe incorrect !");
    }
    const hash = await bcryptjs_1.default.hash(password, Number(bcryptSalt));
    if (user && passwordResetToken) {
        const updatePassword = await user_model_1.UserModel.updateOne({ _id: id }, { $set: {
                userPassword: hash,
            }
        });
        if (updatePassword) {
            await passwordResetToken.deleteOne({ token: token });
        }
    }
    if (isValid && user) {
        // SendEmail(
        //   // "baseMail",
        //   // "resetPassword",
        //   user.userEmail,
        //   "Mot de passe réinitialisé",
        //   // {name : user.userName,}
        // )
    }
    res.send('Mot de passe réinitialisé');
}));
userRouter.post("/requestResetPwd", (0, express_async_handler_1.default)(async (req, res) => {
    const { email } = req.body;
    //console.log(email+ " " + userId)
    const user = await user_model_1.UserModel.findOne({ userEmail: email });
    if (!user) {
        throw new Error("L'utilisateur n'existe pas");
    }
    let token = await token_models_1.TokenModel.findOne({ _id: user._id });
    if (token) {
        await token.deleteOne();
    }
    ;
    let resetToken = (0, crypto_1.randomBytes)(32).toString("hex");
    const hash = await bcryptjs_1.default.hash(resetToken, Number(bcryptSalt));
    await new token_models_1.TokenModel({
        userId: user._id,
        token: hash,
        // createdAt: Date.now(),
    }).save();
    //on envoi le token non crypté pour le comparer avec le token crypté de la base de donnée
    const link = `${clientURL}/#/passwordReset/${resetToken}/${user._id}`;
    // SendEmail(
    //   // "requestResetPassword",
    //   // "baseMail",
    //   user.userEmail,
    //   "Réinitialisation du mot de passe",
    //   // {
    //   //   name : user.userFirstname,
    //   //   link : link,
    //   // }
    // )
}));
userRouter.get("", (0, express_async_handler_1.default)(async (req, res) => {
    const users = await user_model_1.UserModel.find();
    res.send(users);
}));
userRouter.get("/id/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const userId = req.params['id'];
    const user = await user_model_1.UserModel.findOne({ _id: userId });
    // console.log(user);
    res.send(user);
}));
userRouter.get("/email/:email", (0, express_async_handler_1.default)(async (req, res) => {
    const userEmail = req.params['email'];
    const user = await user_model_1.UserModel.findOne({ userEmail: userEmail });
    res.send(user);
}));
userRouter.get("/userId/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const userId = req.params['id'];
    const user = await user_model_1.UserModel.findOne({ userId: userId });
    res.send(user);
}));
userRouter.post("/login", (0, express_async_handler_1.default)(async (req, res) => {
    const { userEmail, userPassword } = req.body;
    const user = await user_model_1.UserModel.findOne({ userEmail });
    if (user && (await bcryptjs_1.default.compare(userPassword, user.userPassword))) {
        res.send(generateTokenResponse(user));
    }
    else {
        res.status(404).send("L'utilisateur n'existe pas ou le mot de passe est incorrect !");
    }
}));
userRouter.delete("/delete/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const userId = req.params.id;
    const user = await user_model_1.UserModel.findOne({ _id: userId });
    const deletedSite = await site_model_1.SiteModel.deleteMany({ siteUserID: userId });
    if (user && deletedSite) {
        await user_model_1.UserModel.deleteOne({ _id: userId });
        res.send("Utilisateur supprimé : " + userId);
    }
    else {
        res.send("Impossible de supprimer l'utilisateur");
    }
}));
// router.patch("userToAdmin/:id",asyncHandler(async(req,res)=>{
//   const userId = req.params['id'];
//   const userChange = 
//   await UserModel.updateOne({_id:userId},{$set : {userAccess : "Admin"}})
//   res.send(userId);
// }))
// router.get("AdminToUser/:id",asyncHandler(async(req,res)=>{
//   const userId = req.params.id;
//   await UserModel.updateOne({_id:userId},{$set : {userAccess : "Utilisateur"}});
//   res.send(userId);
// }))
userRouter.patch("/update/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const id = req.params['id'];
    await user_model_1.UserModel.updateOne({ _id: id }, { $set: req.body });
    res.send(id).status(200);
}));
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map