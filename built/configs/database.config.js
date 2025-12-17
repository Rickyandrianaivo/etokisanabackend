"use strict";
// import {connect, ConnectOptions} from 'mongoose';
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// export const dbConnect = () =>{
//     connect(process.env.MONGO_URI!, {
//         // useNewUrlParser: true,
//         // userUnifiedTopology: true
//     } as ConnectOptions).then(
//         () => console.log("connect successfull"),
//         (error) => console.log(error)
//     )
// }
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const constant_1 = require("../Utils/constant/constant");
class ServerDB {
    constructor() { }
    connectDB() {
        console.log("Connecting DB...");
        mongoose_1.default.connect(`${constant_1.MONGO_URI}`, {}).then(() => console.log("DB connected successfuly")).catch((e) => console.log('Error when connect DB', e));
    }
}
exports.default = new ServerDB();
//# sourceMappingURL=database.config.js.map