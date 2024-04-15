import { connect } from 'mongoose';
export const dbConnect = () => {
    connect(process.env.MONGO_URI, {}).then(() => console.log("connect successfull"), (error) => console.log(error));
};
//# sourceMappingURL=database.config.js.map