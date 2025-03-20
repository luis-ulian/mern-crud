import React from 'react'
import "../styles/ProductCard.css"


const ProductCard = () => {
  return (
    <div className='card'>
        <img className="img" img src="fone.jpg" alt="Produto sem imagem" />
        <h2>Nome do produto</h2>
        <div className='funcButtons'>
            <button>+</button>
            <button>editar</button>
            <button>-</button>
        </div>
    </div>
  )
}

export default ProductCard