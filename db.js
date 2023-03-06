import mongoose from "mongoose";

export default function dataBaseConnection(){
    const params = {
        useNewUrlparser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(process.env.MONGO_URL,params)
        console.log("DB is connected")
    } catch (error) {
        console.log("Error",error)
    }
}