// import {connect, ConnectOptions} from 'mongoose';

// export const dbConnect = () =>{
//     connect(process.env.MONGO_URI!, {
//         // useNewUrlParser: true,
//         // userUnifiedTopology: true
//     } as ConnectOptions).then(
//         () => console.log("connect successfull"),
//         (error) => console.log(error)
//     )
// }

import mongoose from 'mongoose';
import { MONGO_URI } from '../Utils/constant/constant';

class ServerDB {
    constructor() {}

    public connectDB() {
        console.log("Connecting DB...");
        mongoose.connect(`${MONGO_URI}`, {}).then(() => console.log("DB connected successfuly")).catch((e) => console.log('Error when connect DB', e))
    }
}

export default new ServerDB();