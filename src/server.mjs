import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import userRouter from './routers/user.router.js';
import { dbConnect } from './configs/database.config.js';
dbConnect();


const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended : true}));

app.use(cors({
    // credentials:true,
    // origin:["http://localhost:4200"]
}));

app.use("/api/users", userRouter);
app.use("/api/articles", articleRouter);
app.use("/api/bon-entrees", bonEntreesRouter);
app.use("/api/bon-sorties", bonSortiesRouter);
app.use("/api/clients", clientRouter);
app.use("/api/inventaires", inventaireRouter);
app.use("/api/pointDeVente", pointDeVenteRouter);
app.use("/api/facture-ventes", factureVenteRouter);
app.use("/api/mouvementStock", mouvementStockRouter);
app.use("/api/inventaireDetails", inventaireDetailsRouter);
app.use("/api/bon-entrees-details", bonEntreesDetailsRouter);
app.use("/api/bon-sorties-details", bonSortiesDetailsRouter);
app.use("/api/facture-vente-details", factureVenteDetailRouter);

const port = 443;
app.listen(port, () =>{
    // console.log("Website served on http://ids-gescom.onrender.com:" + port);
    console.log("Website served on http://localhost:" + port);
})