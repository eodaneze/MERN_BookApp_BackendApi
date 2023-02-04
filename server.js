import express from "express";
import "./dbconnect/connection.js";
import router from "./routes/bookRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

// adding middlewares
app.use(express.json());
app.use(cors());

app.use("/api", router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on localhost:${port}`));
