import { Router } from "express";
import asyncHandler from "express-async-handler";
import { ClientModel } from "../models/clients.model";

const router = Router();

router.get("/seed",asyncHandler(
    async(req, res) =>{
    const clientCount = await ClientModel.countDocuments();
    if(clientCount > 0){
        res.send("Client seed is already done");
        return;
    }
    // await ClientModel.create(sample_clients);
    res.send("seed is done!");
}))

router.get("/", asyncHandler(
    async(req, res) =>{
    const clients = await ClientModel.find();
    res.send(clients);
}))

router.get("/search/:searchTerm",asyncHandler(
    async(req,res) =>{
    const searchRegex = new RegExp(req.params['searchTerm'], 'i');
    const clients = await ClientModel.find({client_raisonSociale: {$regex:searchRegex}})
    res.send(clients);
}))

router.get("/famille/:famille",asyncHandler(
    async(req,res) =>{
    const searchRegex = new RegExp(req.params['famille'], 'i');
    const clients = await ClientModel.find({client_famille: {$regex:searchRegex}})
    res.send(clients);
}))

router.get("/codeClient/:codeClient",asyncHandler(
    async(req,res) =>{
    // const codeClient = req.params['codeClient'];
    const searchRegex = new RegExp(req.params['codeClient'], 'i');
    // onst searchRegex = new RegExp(req.params['searchTerm'], 'i');
    const client = await ClientModel.find({client_code: {$regex:searchRegex}})
    res.send(client);
}))

router.get("/id/:id",asyncHandler(
    async(req,res) =>{
    const id = req.params['id'];
    const client = await ClientModel.findOne({_id: id})
    res.send(client);
})) 

export default router;