import mongoose, { mongo } from "mongoose";

const connectDb = async ()=>{
    await mongoose.connect(process.env.MONGO_URI+"/tasks");
    console.log("DB connected!")
}

export default connectDb;