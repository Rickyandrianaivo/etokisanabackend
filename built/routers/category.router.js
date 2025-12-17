"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const express_async_handler_1 = tslib_1.__importDefault(require("express-async-handler"));
const category_model_js_1 = require("../models/category.model.js");
const data_js_1 = require("../data.js");
const router = (0, express_1.Router)();
router.post("/seed", (0, express_async_handler_1.default)(async (req, res) => {
    const productCounts = await category_model_js_1.CategoryModel.countDocuments();
    if (productCounts > 0) {
        res.send("Seed is already done !!");
        return;
    }
    await category_model_js_1.CategoryModel.create(data_js_1.sample_categories);
    res.send("Seed is done!!");
}));
router.post("/add", (0, express_async_handler_1.default)(async (req, res) => {
    const { CatMiniatureUrl, CatName, CatDescription } = req.body;
    const newCategory = {
        CatMiniatureUrl,
        CatName,
        CatDescription
    };
    await category_model_js_1.CategoryModel.create(newCategory);
    res.status(200);
}));
router.get("/", (0, express_async_handler_1.default)(async (req, res) => {
    const categories = await category_model_js_1.CategoryModel.find();
    res.send(categories).status(200);
}));
router.put("/update/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const { CatMiniatureUrl, CatName, CatDescription } = req.body;
    await category_model_js_1.CategoryModel.updateOne({ _id: req.params['id'] }, {
        CatMiniatureUrl,
        CatName,
        CatDescription
    });
}));
router.delete("/delete/:id", (0, express_async_handler_1.default)(async (req, res) => {
    res.status(200);
}));
exports.default = router;
//# sourceMappingURL=category.router.js.map