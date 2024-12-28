import { Router } from "express"
import expressAsyncHandler from "express-async-handler";
import { ProductModel } from "../models/product.model";
import { sample_products } from "../data";
import multer from 'multer';

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
        if(productCounts>3){
            res.send("Seed is already done !!");
            return;
        }
        await ProductModel.create(sample_products);
        res.send("Seed is done!!")
}))
router.post("/add/",expressAsyncHandler(async(req,res)=>{
    const {
        productName,
        productDescription,
        productPrice,
        productCategory,
        productUnite,
        productStock,
        productState,
        productSource,
        productOwner,
    }= req.body;
    const newProduct = {
        productName,
        productDescription,
        productPrice,
        productCategory,
        productUnite,
        productStock,
        productState,
        productSource,
        productOwner,
        productImage: productImagePath,
    }
    await ProductModel.create(newProduct);
    res.send(newProduct);
}))
router.put("/update/:id",expressAsyncHandler(async(req,res)=>{
    const {
        productName,
        productDescription,
        productPrice,
        productCategory,
        productUnite,
        productStock,
        productState,
        productSource
    }= req.body;
    const modifiedProduct = await ProductModel.updateOne({_id : req.params['id']},
    {
        productName,
        productDescription,
        productPrice,
        productCategory,
        productUnite,
        productStock,
        productState,
        productSource
    })
    res.send(modifiedProduct);
}))
router.delete("/delete/:id",expressAsyncHandler(async(req,res)=>{
    res.status(200)
}))

router.get("/",expressAsyncHandler(async(req,res)=>{
    const allProducts = await ProductModel.find();
    res.send(allProducts);
}))
router.get("/:id",expressAsyncHandler(async(req,res)=>{
    const productId = req.params['id'];
    const selectedProduct = await ProductModel.findById(productId);
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

// uplod des fichiers encore en cours de mainteannce
//Upload essay 2
router.post('/upload',upload.single('file'),(req,res)=>{
    // router.post('/imageUpload',expressAsyncHandler(async(req,res)=>{
        console.log(req.file);
        if (req.file) {
            productImagePath = req.file.path
        }
        res.status(200).json(req.file)
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