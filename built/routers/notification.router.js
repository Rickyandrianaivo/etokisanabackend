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
    const newCategory = {
        userId,
        title,
        message,
        state,
    };
    await NotificationModel.create(newCategory);
    res.status(200);
}));
router.get("/", expressAsyncHandler(async (req, res) => {
    const categories = await NotificationModel.find();
    res.send(categories).status(200);
}));
router.get("userId/:userId"), expressAsyncHandler(async (req, res) => {
    const userId = req.params['userId'];
    const userNotifications = NotificationModel.find({ userId: userId });
    console.log(userNotifications);
    res.send(userNotifications).status(200);
});
router.put("/update/:id", expressAsyncHandler(async (req, res) => {
    const { userId, title, message, state, } = req.body;
    await NotificationModel.updateOne({ _id: req.params['id'] }, {
        userId,
        title,
        message,
        state,
    });
}));
router.delete("/delete/:id", expressAsyncHandler(async (req, res) => {
    res.status(200);
}));
export default router;
//# sourceMappingURL=notification.router.js.map