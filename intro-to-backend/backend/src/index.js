import dotenf from "dotenv";
import connectDB from "./config/database";

dotenv.config({
    path: './.env'
});

const startServer = async () => {

    try {
        await connectDB();


        app.on("error", (error) => {
            console.log('Error', error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log('server running on port', process.env.PORT);
        });
    } catch (error) {

        console.log("Mongo db connection error", error);

    }

}

startServer();