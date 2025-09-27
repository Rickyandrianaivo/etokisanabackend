import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { NotificationModel } from "../models/notification.model.js";
import { sample_categories } from "../data.js";
const router = Router();
router.post("/seed", expressAsyncHandler(async (req, res) => {
    const productCounts = await NotificationModel.countDocuments();
    if (productCounts > 0) {
        res.send("Seed is already done !!");
        return;
    }
    await NotificationModel.create(sample_categories);
    res.send("Seed is done!!");
}));
router.post("/add", expressAsyncHandler(async (req, res) => {
    const { userId, title, message, state, } = req.body;
    const newNotification = {
        userId,
        title,
        message,
        state,
    };
    await NotificationModel.create(newNotification);
    res.status(200).send(newNotification);
}));
router.get("/", expressAsyncHandler(async (req, res) => {
    const notifications = await NotificationModel.find();
    res.send(notifications).status(200);
}));
router.get("/id/:id", expressAsyncHandler(async (req, res) => {
    const notification = await NotificationModel.findOne({ userId: req.params['id'] });
    res.send(notification).status(200);
}));
router.get("/userid/:id", expressAsyncHandler(async (req, res) => {
    const notifications = await NotificationModel.find({ userId: req.params['id'] });
    res.send(notifications).status(200);
}));
router.patch("/update/:id", expressAsyncHandler(async (req, res) => {
    const updatednotification = await NotificationModel.updateOne({ _id: req.params['id'] }, { $set: req.body });
    res.send(updatednotification).status(200);
}));
router.delete("/delete/:id", expressAsyncHandler(async (req, res) => {
    res.status(200);
}));
export default router;
//# sourceMappingURL=notification.router.js.map