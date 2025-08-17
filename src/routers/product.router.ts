import { Router, Request,Response } from "express"
import expressAsyncHandler from "express-async-handler";
import { ProductModel } from "../models/product.model.js";
import { StockElementModel } from "../models/stockElement.model.js";
import { DepotItemModel } from "../models/DepotItem.model.js";
import { SendEmail } from "../Utils/Emails/sendEmail.js";
import { SiteModel } from "../models/site.model.js";
import { UserModel } from "../models/user.model.js";
import { sample_products } from "../data.js";
import  ftp from "basic-ftp";
import multer from 'multer';
import fs from "fs";

const router = Router();
// const storage = multer.diskStorage({
//     destination: function(req,file,cb){
//         cb(null,__dirname + '/../uploads');
//     },
//     filename: function (req, file, cb){
//         cb(null, file.originalname);
//     },
// });
const upload = multer({dest:"uploads/"}); // stockage temporaire

//Interface pour multer afin de typer req.file
interface MulterRequest extends Request{
    file?:Express.Multer.File;
}

// const upload = multer({storage:storage,limits:{fieldSize: 50*1024*1024}})

/**SendEmail function */
// const SendEmail =  (
//     defaultLayout:string,
//     templateName:string,
//     destinataireEmail : string,
//     subjectEmail:string,
//     contextObject:any)=>{
//     let transporter = nodemailer.createTransport({
//           host: process.env.EMAIL_HOST,
//           port: 465,
//           secure: true, // true for port 465, false for other ports
//           auth: {
//             user: process.env.EMAIL_USERNAME,
//             pass: process.env.EMAIL_PASSWORD
//           },
//         });
//         transporter.use("compile",hbs({
//           viewEngine: {
//             extname:'.handlebars',
//             partialsDir:'./Utils/Emails/Template',
//             layoutsDir:'./Utils/Emails/Template',
//             defaultLayout: defaultLayout
//           },
//           viewPath : "./Utils/Emails/Template/",
//           extName : '.handlebars'
      
//         }))
//         let info = {
//           from: 'Etokisana <contact@commercegestion.com>', // sender address
//           to: destinataireEmail, // list of receivers
//           subject: subjectEmail, // Subject line
//           template: templateName,
//           context : contextObject
//         };
    
//         transporter.sendMail(info,(error,info)=>{
//           if (error) {
//               console.log(info);
//               console.log(error);
//           }   else{
//               console.log("Email sent" + info.response);
//           }
//         })
// }



router.post('/upload-image',upload.single('file'),async(req:MulterRequest,res:Response)=>{
    if(!req.file){
        return res.status(400).json({success: false, error : "Aucun fichier fourni"})
    }
    const  localPath = req.file.path; // chemin temporaire
    const remotePath = `/httpdocs/images/${req.file.originalname}`; // destination

    const client = new ftp.Client();
    client.ftp.verbose = true;

    try{
        //Connextion FTP
        await client.access({
            host : process.env.FTP_HOST,
            user : process.env.FTP_USER,
            password : process.env.FTP_PWD,
            secure : false // mettre true si FTPS
        });

        // Envoi du fichier
        await client.uploadFrom(localPath,remotePath);
        const imageUrl = `https://www.commercegestion.com/images/${req.file.originalname}`

        //Supprimer le fichier local après upload
        fs.unlinkSync(localPath);
        
        const responseData = {
            succes: true,
            message : "Fichier uploadé avec succès !",
            originalFileName : req.file?.originalname,
            mimeType : req.file?.mimetype,
            sizeInBytes : req.file?.size,
            url : imageUrl
        } 
       return res.json({responseData});
    }catch(error){
        console.error("Erreur FTP:",error);
        return res.status(500).json({success : false, error: "Erreur lors de l'upload"});
    }finally{
        client.close();
        // return res.json({message: "Processus d'upload terminé"});
    }
  
});


router.post("/seed",expressAsyncHandler(async(req,res)=>{
        const productCounts = await ProductModel.countDocuments();
        if(productCounts>4){
            res.send("Seed is already done !!");
            return;
        }
        await ProductModel.create(sample_products);
        res.send("Seed is done!!")
}))
router.post("/add/",expressAsyncHandler(async(req,res)=>{
    const {
        codeCPC,
        productName,
        productDescription,
        productCategory,
        productState,
        productImage,
        productValidation,
        productVolume,
        productHauteur,
        productLargeur,
        productLongueur,
        productPoids,
        productOwnerId,
    }= req.body;
    const newProduct = {
        codeCPC,
        productName,
        productDescription,
        productCategory,
        productState,
        productImage,
        productValidation,
        productVolume,
        productHauteur,
        productLargeur,
        productLongueur,
        productPoids,
        productOwnerId,
    }
    await ProductModel.create(newProduct);
    res.send(newProduct);
}))
router.patch("/update/:id",expressAsyncHandler(async(req,res)=>{
    const modifiedProduct = await ProductModel.updateOne({_id : req.params['id']},{$set : req.body});
    res.send(modifiedProduct);
}))
router.delete("/delete/:id",expressAsyncHandler(async(req,res)=>{
    await ProductModel.deleteOne({_id : req.params['id']})
    res.status(200).send("suppression réussie !");
}))

router.get("/",expressAsyncHandler(async(req,res)=>{
    const allProducts = await ProductModel.find();
    res.send(allProducts);
}))
router.get("/:id",expressAsyncHandler(async(req,res)=>{
    const productId = req.params['id'];
    const selectedProduct = await ProductModel.findOne({_id : productId});
    res.send(selectedProduct);
}))
router.get("/owner/:id",expressAsyncHandler(async(req,res)=>{
    const ownerId = req.params['id'];
    const selectedProduct = await ProductModel.find({productOwnerId:ownerId});
    res.send(selectedProduct);
}))
router.get("/email/:email",expressAsyncHandler(async(req,res)=>{
    const productOwner = req.params['email'];
    const selectedProduct = await ProductModel.find({productOwner:productOwner});
    res.send(selectedProduct);
}))
router.get("/category/:category",expressAsyncHandler(async(req,res)=>{
    const productCat = req.params['category']
    const productByCat = await ProductModel.find({productCategory : productCat});
    res.send(productByCat);
}))
router.get("/state/:state",expressAsyncHandler(async(req,res)=>{
    const productState = req.params['state']
    const productByState = await ProductModel.find({productCategory : productState});
    res.send(productByState);
}))
router.get("/stock/:id",expressAsyncHandler(async(req,res)=>{
    const depotId = req.params['id'];
    const productInStock = await StockElementModel.find({depotId : depotId});
    res.send(productInStock);
}))
router.post("/addstock",expressAsyncHandler(async(req,res)=>{
    const {
        depotId,
        productId,
        quantity
    }=req.body;
    const newStockElement = {
        depotId,
        productId,
        quantity
    }
    await StockElementModel.create(newStockElement);
    res.send(newStockElement);
}))

router.get('/getAllStock',expressAsyncHandler(async(req,res)=>{
    const allproduct = await DepotItemModel.find();
    if (allproduct.length>0) {
        res.status(200);
    }
}))
router.post('/addDepotItem',expressAsyncHandler(async(req,res)=>{
    const {     
        productId ,
        stock,
        prix,
        lastUpdate,
        currentDepotId,
    }= req.body;
    let newDepotItemData= {
        productId ,
        stock,
        prix,
        lastUpdate,
        currentDepotId,
    }
    const newDepotItem = await DepotItemModel.create(newDepotItemData);
    
    const currentSite = await SiteModel.findOne({_id:currentDepotId})

    if(currentSite){
        const currentUser = await UserModel.findOne({userId:currentSite.siteUserID})
        if (currentUser) {
            let contexteEmail = {
                name:currentUser.userNickName,
            }
            SendEmail(
                "baseMail",
                "Deposit",
                currentUser.userEmail,
                "Nouveau produit mis en stock",
                contexteEmail
            )            
        }
    }
    res.send(newDepotItem).status(200);

}))
router.patch('/modifyDepotItem/:id',expressAsyncHandler(async(req,res)=>{
    const newDepotItem = await DepotItemModel.updateOne({_id:req.params['id']},{$set:req.body});
    res.send(newDepotItem).status(200);
}))
router.get('/getDepotItemByProductId/:id',expressAsyncHandler(async(req,res)=>{
    const allDepotItemByProductId = await DepotItemModel.find({productId : req.params['id']})
    res.status(200).send(allDepotItemByProductId);
}))


// à faire searchterm


// filtre par prix croissant & décroissant ou fourchette


// prévoir combinaison de filtre localisation, provenance, prix 

export default router;