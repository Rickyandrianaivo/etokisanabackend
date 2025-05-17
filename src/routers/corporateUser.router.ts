import { Router } from "express";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Token, TokenModel } from "../models/token.models.js";
import {randomBytes} from"crypto";import nodemailer from "nodemailer";
import hbs from 'nodemailer-express-handlebars';
import multer from 'multer';
import { CorporateUserModel, iCorporateUser } from "../models/corporateUser.model.js";

const bcryptSalt = process.env.BCRYPT_SALT;
const clientURL = process.env.CLIENT_URL;
const router = Router();
const avatar = multer({
  limits:{
    fileSize:1000000,
  },
  fileFilter(req,file,cb){
    if (file.originalname.match(/\.(jpg|png|JPG|PNG|JPEG|jpeg)$/)) {
      return cb(new Error('This is not a correct format of the file'))
    }
    cb(null,true)
  }
})

// router.post('/user-avatar/',avatar.single('avatar'),async(req,res)=>{
//   userImage = req.file?.buffer
// },(err,req,res,next) => res.status(404).send({error:err}))

router.get("/corporate-confirmation/:token",asyncHandler(async(req,res)=>{
    const verified = await TokenModel.findOne({token:req.params['token']});
    if(verified){
        console.log(verified);
        const user = await CorporateUserModel.findOne({_id : verified.userId});
        if (user) {
          const activatedUser = {
            userId: user.userId,
            raisonSocial: user.raisonSocial,
            type : user.type,
            rcs : user.rcs,
            carteStat : user.carteStat,
            nif : user.nif,
            carteFiscal : user.carteFiscal,
            logo : user.logo,
            managerName : user.managerName,
            managerEmail : user.managerEmail,
            contactName : user.contactName,
            contactPhone : user.contactPhone,
            contactEmail : user.contactEmail,
            siegeAddress : user.siegeAddress,
            siegeLat : user.siegeLat,
            siegeLng : user.siegeLng,
            contactEmailVerified : user.contactEmailVerified,
            corporateUserValidated : user.corporateUserValidated,
            userTotalSolde  : user.userTotalSolde,
            userAccess : user.userAccess,
            userPassword : user.userPassword,
          }
          await CorporateUserModel.updateOne({_id : verified.userId}, activatedUser)
          console.log()
          await TokenModel.deleteOne({token : verified.token});
          res.status(200).send("Token Effacer")
        }
    }
    else{
      res.status(404).send("Token Introuvable")
    }
}))

router.post("/register/",asyncHandler(async(req, res) => {
    let tokenInfo
    const {
      userId,
      raisonSocial,
      type,
      rcs,
      carteStat,
      nif,
      carteFiscal,
      logo,
      managerName,
      managerEmail,
      contactName,
      contactPhone,
      contactEmail,
      siegeAddress,
      siegeLat,
      siegeLng,
      contactEmailVerified,
      corporateUserValidated,
      userTotalSolde,
      userAccess,
      userPassword,
      } = req.body;
    const user = await CorporateUserModel.findOne({contactEmail : contactEmail.toLowerCase()});

    if(user){
        res.send("Ce nom est déjà utilisé!");
        return;
    }else
    {
        const encryptedPassword = await bcrypt.hash(userPassword,10);
        
        const newUser : iCorporateUser = {
          userId,
          raisonSocial,
          type,
          rcs,
          carteStat,
          nif,
          carteFiscal,
          logo,
          managerName,
          managerEmail : managerEmail.toLowerCase(),
          contactName,
          contactPhone,
          contactEmail : contactEmail.toLowerCase(),
          siegeAddress,
          siegeLat,
          siegeLng,
          contactEmailVerified,
          corporateUserValidated,
          userTotalSolde,
          userAccess,
          userPassword: encryptedPassword,
        }
        const userDb = await CorporateUserModel.create(newUser);
        tokenInfo = generateTokenResponse(userDb);
        const tokenDB : Token = {
          userId    : tokenInfo.userId,
          token : tokenInfo.token,
          // createdAt : new Date()
        }
        await TokenModel.create(tokenDB);        
    }
    const verificationLink = "https://www.commercegestion.com/#/user-confirmation/"+ tokenInfo.token;
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
      let info = {
        from: 'Etokisana <contact@commercegestion.com>', // sender address
        to: contactEmail, // list of receivers
        subject: "Bienvenue sur Etokisana", // Subject line
        template: "welcome",
        context : {
          name : contactEmail,
          link : verificationLink,
        }
      };

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
}))
router.get("/new",asyncHandler(async(req,res)=>{
  const userNewList = await CorporateUserModel.find({corporateUserValidated : false})
  res.status(200).send(userNewList)
}))
router.patch("/validate/:id",asyncHandler(async(req,res)=>{
  const userId = req.params['id'];
  await CorporateUserModel.updateOne({_id : userId},{$set : {userValidated : true}}) 
}))

const generateTokenResponse = (user:any) =>{
    const token = jwt.sign({
        _id: user._id,
        contactEmail:user.contactEmail,
        contactPhone:user.contactPhone,
    },process.env.JWT_SECRET!,{
        expiresIn:"30d"
    });
    return {
      userId: user.userId,
      raisonSocial: user.raisonSocial,
      type : user.type,
      rcs : user.rcs,
      carteStat : user.carteStat,
      nif : user.nif,
      carteFiscal : user.carteFiscal,
      logo : user.logo,
      managerName : user.managerName,
      managerEmail : user.managerEmail,
      contactName : user.contactName,
      contactPhone : user.contactPhone,
      contactEmail : user.contactEmail,
      siegeAddress : user.siegeAddress,
      siegeLat : user.siegeLat,
      siegeLng : user.siegeLng,
      contactEmailVerified : user.contactEmailVerified,
      corporateUserValidated : user.corporateUserValidated,
      userTotalSolde  : user.userTotalSolde,
      userAccess : user.userAccess,
      userPassword : user.userPassword,
        token           : token
    };
}
  router.get("/corporateToken/:token",asyncHandler(async(req,res)=>{
    const token = req.params['token'];
    const tokenUserId = await TokenModel.findOne({token});
    if (tokenUserId) {
      const userConcerned =await CorporateUserModel.findOne({_id:tokenUserId.userId})
      res.send(userConcerned).status(200)
    }
 }))
 
router.put("/passwordReset",asyncHandler(async(req,res)=>{
    const {id,token,password} = req.body;
    console.log(id,token,password)
    let passwordResetToken = await TokenModel.findOne({ userId : id });
    let user = await CorporateUserModel.findOne({_id:id})
    if (!passwordResetToken) {
      throw new Error("Invalid or expired password reset token");
    }
    const isValid = await bcrypt.compare(token, passwordResetToken.token);
    if (!isValid) {
      throw new Error("Invalid or expired password reset token");
    }
    const hash = await bcrypt.hash(password, Number(bcryptSalt));
    if (user) {
      const updatePassword = await CorporateUserModel.updateOne({ _id: id },{$set:{
          userId: user.userId,
          raisonSocial: user.raisonSocial,
          nif: user.nif,
          contactEmail : user.contactEmail,
          contactPhone : user.contactPhone,
          contactEmailValidated : user.contactEmailVerified,
          userType : user.type,
          userTotalSolde : user.userTotalSolde,
          userPassword : hash,
        }
      });
      if (updatePassword) {
          await passwordResetToken.deleteOne({token : token});
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
    transporter.use("compile",hbs({
      viewEngine: {
        extname:'.handlebars',
        partialsDir:'./Utils/Emails/Template',
        layoutsDir:'./Utils/Emails/Template',
        defaultLayout: 'resetPassword'
      },
      viewPath : "./Utils/Emails/Template/",
      extName : '.handlebars'
  
    }))
    let info = {
      from: 'Etokisana <contact@commercegestion.com>', // sender address
      to: user.contactEmail, // list of receivers
      subject: "Réinitialisation du mot de passe", // Subject line
      template: "baseMail",
      context : {
        name : user.contactName,
      }
    };

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
    }
    res.send('Password reseted')   
 }))

router.post("/requestResetPwd",asyncHandler(async(req,res)=>{
    const {email} = req.body;
    // console.log(email+ " " + userId)
    const user = await CorporateUserModel.findOne({contactEmail : email})

    if (!user) {
        throw new Error("L'utilisateur n'existe pas")
    }
    let token = await TokenModel.findOne({ _id: user._id });
    if (token) { 
          await token.deleteOne()
    };
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
        transporter.use("compile",hbs({
          viewEngine: {
            extname:'.handlebars',
            partialsDir:'./Utils/Emails/Template',
            layoutsDir:'./Utils/Emails/Template',
            defaultLayout: 'requestResetPassword'
          },
          viewPath : "./Utils/Emails/Template/",
          extName : '.handlebars'
      
        }))
        let info = {
          from: 'Etokisana <contact@commercegestion.com>', // sender address
          to: user.contactEmail, // list of receivers
          subject: "Réinitialisation du mot de passe", // Subject line
          template: "baseMail",
          context : {
            name : user.contactName,
            link : link,
          }
        };
  
        await transporter.sendMail(info,(error,info)=>{
          if (error) {
              console.log(info);
              console.log(error);
              res.status(500).send('Error sendig mail:'+ error)
          }   else{
              console.log("Email sent" + info.response);
              res.status(200).send('Email sent successfully')
          }
        })
}))

router.get("", asyncHandler(async(req, res) => {
    const users = await CorporateUserModel.find();
    res.send(users);
}))
router.get("/id/:id", asyncHandler(async(req, res) => {
    const userId = req.params['id'];
    const user = await CorporateUserModel.findOne({_id : userId});
    console.log(user);
    res.send(user);
}))
router.get("/email/:email", asyncHandler(async(req, res) => {
    const contactEmail = req.params['email'];
    const user = await CorporateUserModel.findOne({contactEmail : contactEmail});
    res.send(user);
}))
router.get("/userId/:id", asyncHandler(async(req, res) => {
  const userId = req.params['id'];
  const user = await CorporateUserModel.findOne({userID : userId});
  console.log(user);
  res.send(user);
}))

router.post("/login",asyncHandler(async(req,res) => {
    const {contactEmail,userPassword} = req.body;
    const user = await CorporateUserModel.findOne({contactEmail : contactEmail})
    if (user && (await bcrypt.compare(userPassword,user.userPassword))) {
        res.send(generateTokenResponse(user));
        
    }else{
        res.status(404).send("User name or password is not valid!")
    }
}))

router.patch("/update/:id",asyncHandler(async(req,res) => {
    const dbId = req.params['id'];
    const {
      userId,
      raisonSocial,
      type,
      rcs,
      carteStat,
      nif,
      carteFiscal,
      logo,
      managerName,
      managerEmail,
      contactName,
      contactPhone,
      contactEmail,
      siegeAddress,
      siegeLat,
      siegeLng,
      contactEmailVerified,
      corporateUserValidated,
      userTotalSolde,
      userAccess,
      userPassword,
    } = req.body;

    await CorporateUserModel.updateOne({_id : dbId}, {
      userId,
      raisonSocial,
      type,
      rcs,
      carteStat,
      nif,
      carteFiscal,
      logo,
      managerName,
      managerEmail: managerEmail.toLowerCase(),
      contactName,
      contactPhone,
      contactEmail:contactEmail.toLowerCase(),
      siegeAddress,
      siegeLat,
      siegeLng,
      contactEmailVerified,
      corporateUserValidated,
      userTotalSolde,
      userAccess,
      userPassword,
      });

}))

export default router;