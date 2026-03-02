import mongoose, { Schema } from "mongoose";

const dbSchema = new mongoose.Schema({
    task : String,
    description : String
})

const dbModel = mongoose.model("todos",dbSchema);

export default dbModel;