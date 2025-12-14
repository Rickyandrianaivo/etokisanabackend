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
import notificationRouter from './routers/notification.router.js';
import depotItemRouter from './routers/depotItem.router.js';
import nodemailer from 'nodemailer';

dbConnect();


const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended : true}));
app.use('/uploads',express.static('uploads'));

app.use(cors(
    // {origin:["http://localhost:4200","https://www.commercegestion.com","https://commercegestion.com"]}
    // {
    //     origin:["http://localhost:4200","https://www.commercegestion.com","https://commercegestion.com"],
    // }
));

// app.use(fileUpload({
//     limits:{fieldSize:50 * 1024 * 1024} // limit file size to 200MB
// }))
app.use("/api/users", userRouter);
app.use("/api/site", siteRouter)
app.use("/api/product", productRouter);
app.use("/api/depotItem", depotItemRouter);
app.use("/api/category", categoryRouter);
app.use("/api/transaction", transactionRouter);
app.use("/api/notification", notificationRouter);


// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  // service: "gmail",
  host: "commercegestion.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "contact@commercegestion.com",
    pass: "Rzh398aNVtFZUu4",
    // pass: "fxbl ouuq biso jbdb",
    // user: process.env.EMAIL_USER,
    // pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: 'contact@commercegestion.com',
  to: "randrianaivo.dominique@gmail.com",
  subject: "inscription Dominique 2 ✔",
  text: "inscription réussie !", // plain‑text body
  html: "<b>inscription réussie !</b>", // HTML body
};

const sendMail = async (transporter:any, mailOptions:any) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent successfully:", info.messageId);
  } catch (error) {
    console.log("Error while sending mail:", error);
  }
};

sendMail(transporter, mailOptions);

const port = 3000;
app.listen(port, () =>{
    // console.log("Website served on http://ids-gescom.onrender.com:" + port);
    console.log("Website served on http://localhost:" + port);
})