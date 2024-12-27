import { connect } from 'mongoose';
export const dbConnect = () => {
    connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // userUnifiedTopology: true
    }).then(() => console.log("connect successfull"), (error) => console.log(error));
};
//# sourceMappingURL=database.config.js.map