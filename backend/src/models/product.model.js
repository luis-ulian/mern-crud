import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true,
        },
        quantity:{
            type: Int,
            default: 0,
        },
        price:{
            type: Number
        }
    }
);