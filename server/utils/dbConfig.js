import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`);
        console.log(`MongoDb connected to ${process.env.DB_NAME}`);
    } catch (error) {
        console.log("error from dbConfig", error.message);
    }
}

connectDB();