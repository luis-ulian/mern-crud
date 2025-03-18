import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const { name, quantity, price, image } = req.body;
  try {
    if (!name) {
      return res.status(400).json({ message: "Você deve preencher o nome do produto!" });
    }

    if (quantity < 0 || price < 0) {
      return res.status(400).json({ message: "Você deve inserir valores válidos!" });
    }

    const product = await Product.findOne({name});

    if (product) {
      return res.status(400).json({ message: "Já existe um produto com mesmo nome!" });
    }

    const newProduct = new Product({
      name,
      quantity,
      price,
      image
    });

    if (newProduct) {
      await newProduct.save();

      res.status(201).json({
        _id: newProduct._id,
        name: newProduct.name,
        quantity: newProduct.quantity,
        price: newProduct.price,
        image: newProduct.image
      });
    } else {
      return res.status.json({ message: "Erro ao criar produto: " + error.message });
    }
  } catch (error) {
    console.log("error in createProduct endpoint: ", error.message);
    res.status(500).json({message:"Erro interno do servidor."});
  }
};

export const updateProduct = async (req,res) => {
  try {
    const {name, quantity, price, image} = req.body;

    const {id:productId} = req.params;

    if(!name)  {
      return res.status(400).json({message: "Você deve preencher o nome do produto."});
    }

    const product = await Product.findOne({"product.name": {name}, "product._id": {$ne: productId}});

    if(product){
      return res.status(400).json({message: "Já existe um produto com o mesmo nome. '" + product._id + "'"})
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, {name: name, quantity: quantity, price: price, image: image}, {new: true}) // "new: true" retorna novo produto após ser alterado

    res.status(200).json(updatedProduct)
  } catch (error) {
    console.log("error in updateProduct endpoint: ", error.message);
    res.status(500).json({message:"Erro interno do servidor."});
  }
};

export const deleteProduct = async (req,res) => {
  try {
    const {id:productId} = req.params;
    await Product.findOneAndDelete({_id: productId});

    res.status(200).json({message:"Produto excluído com sucesso."});
  } catch (error) {
    console.log("error in deleteProduct endpoint: " + error.message);
    res.status(500).json({message: "Erro interno do servidor."});
  }
};

export const getProducts = async (req,res) => {
  try {
    const products = await Product.find();

    res.status(200).json({products});
  } catch (error) {
    console.log("error in getProducts endpoint: " + error);
    res.status(500).json({message:"Erro interno do servidor."});
  }
};
