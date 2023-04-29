import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import registerRoute from "./Routes/authRoutes.js";
const app = express();
dotenv.config()

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors( ));
app.use("/api/v1/auth",registerRoute);
const PORT = process.env.PORT;
const CONNECTED_URL = process.env.CONNECTED_URL;

mongoose.set("strictQuery",false);

mongoose.connect(CONNECTED_URL)
.then(() =>
  app.listen(PORT,() => {
    console.log('Server is running in localhost:5000');
}))
.catch((err) => {
  console.log('Error! Not connected to the database!');
})
