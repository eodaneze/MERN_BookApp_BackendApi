import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const url = process.env.MONGO_URL_LOCAL;

mongoose.set('strictQuery', false)
mongoose.connect(url, {}, () => {
  console.log('database connected succesfully');
})