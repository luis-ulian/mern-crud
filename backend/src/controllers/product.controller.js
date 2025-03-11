import Product from "../models/product.model.js"

export const createProduct = async (req,res) => {
    const {name, quantity, price} = req.body;
    try {
        if(!name) {
            return res.status(400).json({message: "Você deve preencher o nome do produto!"});
        }

        if(quantity < 0 || price < 0) {
            return res.status(400).json({message: "Você deve inserir valores válidos!"});
        }

        const product = Product.findOne(name);

        if(product) {
            return res.status(400).json({message: "Já existe um produto com mesmo nome!"});
        }

        const newProduct = new Product({
            name,
            quantity,
            price
        });

        if(newProduct) {
            await newProduct.save();

            res.status(201).json({
                _id: newProduct._id,
                name: newProduct.name,
                quantity: newProduct.quantity,
                price: newProduct.price
            })
        } else {
            res.status.json({message: ""})
        }

    } catch (error) {
        
    }
}

export const updateProduct = async () => {
    
}

export const deleteProduct = async () => {
    
}