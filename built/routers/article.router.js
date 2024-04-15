import { Router } from "express";
import asyncHandler from "express-async-handler";
import { ArticleModel } from "../models/article.models";
const router = Router();
router.get("/", asyncHandler(async (req, res) => {
    const articles = await ArticleModel.find();
    res.send(articles);
}));
router.get("/search/:searchTerm", asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params['searchTerm'], 'i');
    const articles = await ArticleModel.find({ designation: { $regex: searchRegex } });
    res.send(articles);
}));
router.get("/reference/:reference", asyncHandler(async (req, res) => {
    const reference = req.params['reference'];
    const article = await ArticleModel.findOne({ reference: reference });
    res.send(article);
}));
router.get("/id/:id", asyncHandler(async (req, res) => {
    const id = req.params['id'];
    const article = await ArticleModel.findOne({ _id: id });
    res.send(article);
}));
router.get("/famille/:famille", asyncHandler(async (req, res) => {
    const articles = await ArticleModel.find({ categorie: req.params['famille'] });
    res.send(articles);
}));
export default router;
//# sourceMappingURL=article.router.js.map