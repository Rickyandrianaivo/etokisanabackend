import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import userRouter from './routers/user.router.js';
import siteRouter from './routers/site.router.js';
import productRouter from './routers/product.router.js';
import categoryRouter from './routers/category.router.js';
import { dbConnect } from './configs/database.config.js';
import transactionRouter from './routers/transaction.router.js';
dbConnect();
const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/uploads', express.static('uploads'));
app.use(cors({
    // credentials:true,
    origin: ["http://localhost:4200", "https://www.commercegestion.com"]
}));
// app.use(fileUpload({
//     limits:{fieldSize:50 * 1024 * 1024} // limit file size to 200MB
// }))
app.use("/api/users", userRouter);
app.use("/api/site", siteRouter);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/transaction", transactionRouter);
const port = 443;
app.listen(port, () => {
    // console.log("Website served on http://ids-gescom.onrender.com:" + port);
    console.log("Website served on http://localhost:" + port);
});
//# sourceMappingURL=server.js.map