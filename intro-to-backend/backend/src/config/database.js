import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect
            (`${process.env.MONGODB_URI}`)
        console.log(`\n mongoDB connected !!!
                ${connectionInstance.connection.host}`);
        // tell us connectionInstance.connection.host connection instance address
    } catch (error) {

        console.log("MongoDB connectio faild", error);
        process.exit(1);

    }
}

export default connectDB;