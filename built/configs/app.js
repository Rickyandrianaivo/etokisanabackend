"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const express_fileupload_1 = tslib_1.__importDefault(require("express-fileupload"));
const user_router_1 = tslib_1.__importDefault(require("../routers/user.router"));
const site_router_1 = tslib_1.__importDefault(require("../routers/site.router"));
const product_router_1 = tslib_1.__importDefault(require("../routers/product.router"));
const category_router_1 = tslib_1.__importDefault(require("../routers/category.router"));
const notification_router_1 = tslib_1.__importDefault(require("../routers/notification.router"));
const constant_1 = require("../Utils/constant/constant");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.appUse();
    }
    appUse() {
        this.app.use(express_1.default.json({ limit: `${constant_1.LIMIT}` }));
        this.app.use(express_1.default.urlencoded({ limit: `${constant_1.LIMIT}`, extended: true }));
        this.app.use((0, cors_1.default)());
        this.app.use((0, express_fileupload_1.default)());
        this.app.use('/uploads', express_1.default.static('uploads'));
        this.app.use("/api/users", user_router_1.default);
        this.app.use("/api/site", site_router_1.default);
        this.app.use("/api/product", product_router_1.default);
        //this.app.use("/api/depotItem", depotItemRouter);
        this.app.use("/api/category", category_router_1.default);
        //this.app.use("/api/transaction", transactionRouter);
        this.app.use("/api/notification", notification_router_1.default);
    }
    bootstrap() {
        return this.app.listen(constant_1.PORT_DEV, () => {
            console.log(`Server lisning on port ${constant_1.PORT_DEV}`);
        });
    }
}
exports.default = new Server();
//# sourceMappingURL=app.js.map