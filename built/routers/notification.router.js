"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const express_async_handler_1 = tslib_1.__importDefault(require("express-async-handler"));
const notification_model_1 = require("../models/notification.model");
const data_1 = require("../data");
const router = (0, express_1.Router)();
router.post("/seed", (0, express_async_handler_1.default)(async (req, res) => {
    const productCounts = await notification_model_1.NotificationModel.countDocuments();
    if (productCounts > 0) {
        res.send("Seed is already done !!");
        return;
    }
    await notification_model_1.NotificationModel.create(data_1.sample_categories);
    res.send("Seed is done!!");
}));
router.post("/add", (0, express_async_handler_1.default)(async (req, res) => {
    const { userId, title, message, state, } = req.body;
    const newNotification = {
        userId,
        title,
        message,
        state,
    };
    await notification_model_1.NotificationModel.create(newNotification);
    res.status(200).send(newNotification);
}));
router.get("/", (0, express_async_handler_1.default)(async (req, res) => {
    const notifications = await notification_model_1.NotificationModel.find();
    res.send(notifications).status(200);
}));
router.get("/id/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const notification = await notification_model_1.NotificationModel.findOne({ userId: req.params['id'] });
    res.send(notification).status(200);
}));
router.get("/userid/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const notifications = await notification_model_1.NotificationModel.find({ userId: req.params['id'] }).sort({ createdAt: -1 });
    res.send(notifications).status(200);
}));
router.get("/new/:id", (0, express_async_handler_1.default)(async (req, res) => {
    const notifications = await notification_model_1.NotificationModel.find({ userId: req.params['id'], states: "new" });
    res.send(notifications).status(200);
}));
router.patch("/update/:id", (0, express_async_handler_1.default)(async (req, res) => {
    console.log(req.body);
    const updatednotification = await notification_model_1.NotificationModel.updateOne({ _id: req.params['id'] }, { $set: req.body });
    const newData = await notification_model_1.NotificationModel.findOne({ _id: req.params['id'] });
    console.log(newData);
    res.send(updatednotification).status(200);
}));
router.delete("/delete/:id", (0, express_async_handler_1.default)(async (req, res) => {
    res.status(200);
}));
exports.default = router;
//# sourceMappingURL=notification.router.js.map