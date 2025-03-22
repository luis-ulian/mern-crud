import React from 'react'
import "../styles/ProductCard.css"


const ProductCard = ({product}) => {
  return (
    <div className='card'>
        <img className="img" img src={product.img} alt={product.name} />
        <div className='cardText'></div>
        <h1 className='productName'>{product.name}</h1>
        <p1 className='productPrice'>R$ {product.price}</p1>
    </div>
  )
}

export default ProductCard