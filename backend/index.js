import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './src/lib/db.js';
import productRouter from "./src/routes/products.route.js"


dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use("/api/products",productRouter)

app.listen(PORT, () => {
    console.log("server is running on port: " + PORT)
    connectDb();
})