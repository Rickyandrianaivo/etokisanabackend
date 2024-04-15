import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () =>{
    connect(process.env.MONGO_URI!, {
        // useNewUrlParser: true,
        // userUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connect successfull"),
        (error) => console.log(error)
    )
}