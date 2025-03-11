import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true,
            unique: true
        },
        quantity:{
            type: Number,
            default: 0
        },
        price:{
            type: Number,
            default: 0
        },
        image: {
            type: String,
            default: ""
        }
    },
    { timestamps: true }
);

const Product = new mongoose.model("Product", productSchema);

export default Product;