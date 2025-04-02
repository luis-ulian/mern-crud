import React from 'react'
import "../styles/ProductCard.css"

const ProductCard = ({product}) => {
  return (
    <div className='card'>
        <img className="productImg" src={product.image} alt={product.name} />
        <div className='cardText'>
          <h3 className='productName'>{product.name}</h3>
          <p1 className='productPrice'>R$ {product.price}</p1>
        </div>
        <div className="iconController">
          <button src="edit.png" className="editIcon" ></button>
          <button src="delete.png" className="deleteIcon" ></button>
        </div>
    </div>
  )
}

export default ProductCard