import { Router } from "express";
import asyncHandler from "express-async-handler";
import { UserModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TokenModel } from "../models/token.models.js";
import { randomBytes } from "crypto";
import { SendEmail } from "../Utils/Emails/sendEmail.js";
import multer from 'multer';
import { NotificationModel } from "../models/notification.model.js";
import { SiteModel } from "../models/site.model.js";
const bcryptSalt = process.env.BCRYPT_SALT;
const clientURL = process.env.CLIENT_URL;
const router = Router();
const avatar = multer({
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
                // identityDocument : user.identityDocument,
                // identityCardNumber : user.identityCardNumber,
                // userAdmin : user.userAdmin,
                // userAddress : user.userAddress,
                // userIdentityCode : user.userIdentityCode,
            };
            await UserModel.updateOne({ _id: verified.userId }, activatedUser);
            console.log();
            await TokenModel.deleteOne({ token: verified.token });
            let newNotification = {
                userId: verified.userId,
                title: "Email vérifié",
                message: "Féliicitations ! Votra Email a bien été vérifié",
                state: "new",
            };
            await NotificationModel.create(newNotification);
            res.status(200).send("Token Effacer");
        }
    }
    else {
        res.status(404).send("Token Introuvable");
    }
}));
router.post("/requestVerificationEmail", asyncHandler(async (req, res) => {
    let tokenInfo;
    const userInfos = req.body;
    tokenInfo = generateTokenResponse(userInfos);
    const tokenDB = {
        userId: tokenInfo._id,
        token: tokenInfo.token,
    };
}));
router.post("/register/", asyncHandler(async (req, res) => {
    let tokenInfo;
    let userDb;
    const { userNickName, userName, userFirstname, userPassword, userEmail, userPhone, userAccess, userParainID, userType, userDateOfBirth, userAddress, userMainLat, userMainLng, userId, userEmailVerified, userValidated, userImage, identityDocument, identityCardNumber, documentType, raisonSocial, type, rcs, carteStat, nif, carteFiscal, logo, managerName, managerEmail, } = req.body;
    const user = await UserModel.findOne({ userEmail: userEmail.toLowerCase() });
    if (user) {
        res.status(500).send("Ce nom est déjà utilisé!");
        return;
    }
    else {
        const encryptedPassword = await bcrypt.hash(userPassword, 10);
        const newUser = {
            userNickName,
            userName,
            userFirstname,
            userPassword: encryptedPassword,
            userEmail: userEmail.toLowerCase(),
            userPhone,
            userTotalSolde: 0,
            userType,
            userAccess,
            userParainID,
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
        };
        userDb = await UserModel.create(newUser);
    }
    tokenInfo = generateTokenResponse(userDb);
    // tokenInfo = generateTokenResponse(tokenInfo);
    const tokenDB = {
        userId: tokenInfo._id,
        token: tokenInfo.token,
        // createdAt : new Date()
    };
    await TokenModel.create(tokenDB);
    // Sending mail
    const verificationLink = "https://www.commercegestion.com/#/user-confirmation/" + tokenInfo.token;
    if (userType == "Entreprise") {
        SendEmail("baseMail", "ValidationEntrepriseEmail", userEmail, "Bienvenue sur Etokisana", {
            name: raisonSocial,
            link: verificationLink,
        });
    }
    if (userType == "Particulier") {
        SendEmail("baseMail", "ValidationEmail", userEmail, "Bienvenue sur Etokisana", {
            name: raisonSocial,
            link: verificationLink,
        });
    }
    let newNotification = {
        userId: userId,
        title: "Inscription en attente",
        message: "Nous vous remercions de faire de patience pendant la validation de votre insciption au sein de nos administrateurs",
        states: "new",
    };
    await NotificationModel.create(newNotification);
    res.status(200).send("Utilisateur créé !!");
}));
router.get("/new", asyncHandler(async (req, res) => {
    const userNewList = await UserModel.find({ userValidated: false, userAccess: "Utilisateur" });
    res.status(200).send(userNewList);
}));
router.get("/validate/:id", asyncHandler(async (req, res) => {
    const userDBId = req.params['id'];
    const userById = await UserModel.findById({ _id: userDBId });
    await UserModel.updateOne({ _id: userDBId }, { $set: { userValidated: true } });
    if (userById?.userType == "Entreprise") {
        SendEmail("baseMail", "welcome", userById.userEmail, "Inscription terminée", {
            name: userById.userName,
        });
    }
    if (userById && userById.userType == "Particulier") {
        SendEmail("baseMail", "welcome", userById.userEmail, "Inscription terminée", {
            name: userById.userName,
        });
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
    const token = jwt.sign({
        _id: user._id,
        userEmail: user.userEmail,
        userPhone: user.userPhone,
    }, process.env.JWT_SECRET, {
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
router.get("/token/:token", asyncHandler(async (req, res) => {
    const token = req.params['token'];
    const tokenUserId = await TokenModel.findOne({ token });
    if (tokenUserId) {
        const userConcerned = await UserModel.findOne({ _id: tokenUserId.userId });
        res.send(userConcerned).status(200);
    }
}));
router.patch("/passwordReset", asyncHandler(async (req, res) => {
    const { token, id, password } = req.body;
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
    if (user && passwordResetToken) {
        const updatePassword = await UserModel.updateOne({ _id: id }, { $set: {
                userPassword: hash,
            }
        });
        if (updatePassword) {
            await passwordResetToken.deleteOne({ token: token });
        }
    }
    if (isValid && user) {
        SendEmail("baseMail", "resetPassword", user.userEmail, "Mot de passe réinitialiser", { name: user.userName, });
    }
    res.send('Password reseted');
}));
router.post("/requestResetPwd", asyncHandler(async (req, res) => {
    const { email } = req.body;
    //console.log(email+ " " + userId)
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
    SendEmail("requestResetPassword", "baseMail", user.userEmail, "Réinitialisation du mot de passe", {
        name: user.userFirstname,
        link: link,
    });
}));
router.get("", asyncHandler(async (req, res) => {
    const users = await UserModel.find();
    res.send(users);
}));
router.get("/id/:id", asyncHandler(async (req, res) => {
    const userId = req.params['id'];
    const user = await UserModel.findOne({ _id: userId });
    // console.log(user);
    res.send(user);
}));
router.get("/email/:email", asyncHandler(async (req, res) => {
    const userEmail = req.params['email'];
    const user = await UserModel.findOne({ userEmail: userEmail });
    res.send(user);
}));
router.get("/userId/:id", asyncHandler(async (req, res) => {
    const userId = req.params['id'];
    const user = await UserModel.findOne({ userId: userId });
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
router.delete("/delete/:id", asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const user = await UserModel.findOne({ _id: userId });
    const deletedSite = await SiteModel.deleteMany({ siteUserID: userId });
    if (user && deletedSite) {
        await UserModel.deleteOne({ _id: userId });
        res.send("Utilisateur supprimé : " + userId);
    }
    else {
        res.send("Impossible d'effacer l'utilisateur");
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
router.patch("/update/:id", asyncHandler(async (req, res) => {
    const id = req.params['id'];
    // const {
    //     userName,
    //     userFirstname,
    //     userPassword,
    //     userEmail,
    //     userPhone,
    //     userImage,
    //     userValidated,
    //     userDateOfBirth,
    //     userTotalSolde,
    //     userAddress ,
    //     userMainLat,
    //     userMainLng,
    //     userId,
    //     identityDocument,
    //     identityCardNumber,
    //     documentType,
    //     raisonSocial,
    //     type,
    //     rcs,
    //     carteStat,
    //     nif,
    //     carteFiscal,
    //     logo,
    //     managerName,
    //     managerEmail,
    // } = req.body;
    await UserModel.updateOne({ _id: id }, { $set: req.body });
    // await UserModel.updateOne({_id : id}, {
    //   userName,
    //   userFirstname,
    //   userPassword,
    //   userEmail,
    //   userPhone,
    //   userImage,
    //   userValidated,
    //   userDateOfBirth,
    //   userTotalSolde,
    //   userAddress ,
    //   userMainLat,
    //   userMainLng,
    //   userId,
    //   identityDocument,
    //   identityCardNumber,
    //   raisonSocial,
    //   type,
    //   rcs,
    //   nif             ,
    //   managerName     ,
    //   managerEmail    ,
    //   });
    //   const updatedUser = await UserModel.findOne({_id:id})
    //   console.log(updatedUser?._id);
    //   console.log(updatedUser?.userId);
    //   console.log(updatedUser?.userName);
    //   console.log(updatedUser?.userFirstname);
    //   console.log(updatedUser?.raisonSocial);
    //   console.log(updatedUser?.userEmail);
    //   console.log(updatedUser?.userAccess);
    //   console.log(updatedUser?.userValidated);
    //   console.log(updatedUser?.userEmailVerified);
    res.send(id).status(200);
}));
export default router;
//# sourceMappingURL=user.router.js.map