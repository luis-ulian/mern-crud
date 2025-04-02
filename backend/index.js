import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './src/lib/db.js';
import productRouter from "./src/routes/products.route.js"
import cors from "cors"

dotenv.config();

const app = express();

const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,           
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());

const PORT = process.env.PORT;

app.use("/api/products",productRouter)

app.listen(PORT, () => {
    console.log("server is running on port: " + PORT)
    connectDb();
})