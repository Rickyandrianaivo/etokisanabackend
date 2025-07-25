import { Router } from "express"
import expressAsyncHandler from "express-async-handler";
import { ProductModel } from "../models/product.model.js";
import { sample_products } from "../data.js";
import multer from 'multer';
import { StockElementModel } from "../models/stockElement.model.js";

const router = Router();
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,__dirname + '/../uploads');
    },
    filename: function (req, file, cb){
        cb(null, file.originalname);
    },
});
const upload = multer({storage:storage,limits:{fieldSize: 50*1024*1024}})
let productImagePath:string = "";

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
    }
    await ProductModel.create(newProduct);
    res.send(newProduct);
}))
router.put("/update/:id",expressAsyncHandler(async(req,res)=>{
    const {
        codeCPC,
        productName,
        productDescription,
        productCategory,
        productState,
        productValidation,
        productVolume,
        productHauteur,
        productLargeur,
        productLongueur,
        productPoids,
    }= req.body;
    const modifiedProduct = await ProductModel.updateOne({_id : req.params['id']},
    {
        codeCPC,
        productName,
        productDescription,
        productCategory,
        productState,
        productValidation,
        productVolume,
        productHauteur,
        productLargeur,
        productLongueur,
        productPoids,
    })
    res.send(modifiedProduct);
}))
router.delete("/delete/:id",expressAsyncHandler(async(req,res)=>{
    await ProductModel.deleteOne({_id : req.params['id']})
    res.status(200)
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
    const selectedProduct = await ProductModel.find({productOwner:ownerId});
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
// uplod des fichiers encore en cours de mainteannce
//Upload essay 2
router.post('/upload',upload.single('file'),(req,res)=>{
    // router.post('/imageUpload',expressAsyncHandler(async(req,res)=>{
    const responseData = {
        message : "Fichier uploadé avec succès !",
        originalFileName : req.file?.originalname,
        mimeType : req.file?.mimetype,
        sizeInBytes : req.file?.size
    }    
    console.log(responseData);
        if (req.file) {
            productImagePath = req.file.path
        }
        res.status(200).json(responseData)
})


//Upload essay 1
// router.post("/product/imageupload", async(req,res)=>{
//     try{
//         let sampleFile : UploadedFile;
//         let uploadPath;
//         if (!req.files || Object.keys(req.files).length === 0) {
//             return res.status(400).send('No files were uploaded.');
//         }
        
//         // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//         sampleFile = req.files!.productImageFile as UploadedFile;
//         uploadPath = __dirname + '/product/' + sampleFile.name;
        
//         // Use the mv() method to place the file somewhere on your server
//         await sampleFile.mv(uploadPath)
//         sampleFile.mv(uploadPath,async(err)=> {
//             if(err)
//             {
//                 return res.status(404).send('file not moved!');
//             }
//             return res.status(200).send('File uploaded!');   
//         })
//         return res.status(200).send('File uploaded!');
//         }catch(e){
//         console.log('Error occured too file upload: ' + e);
//         return res.status(400).send({'Error':e});
//     }
// })
// à faire searchterm
// filtre par prix croissant & décroissant ou fourchette
// prévoir combinaison de filtre localisation, provenance, prix 

export default router;