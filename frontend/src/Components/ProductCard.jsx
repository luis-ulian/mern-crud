import React from 'react'
import "../styles/ProductCard.css"

const ProductCard = ({product}) => {
  return (
    <div className='card'>
        <img className="productImg" src={product.image} alt={product.name} />
        <div className='productFields'>
          <div className='cardText'>
            <h1 className='productName'>{product.name}</h1>
            <p1 className='productPrice'>R$ {Intl.NumberFormat("pt-BR", {currency: "BRL"}).format(product.price)}</p1>
          </div>
          <div className="iconController">
            <input type="image" src="edit.png" className='editIcon '/>
            <input type="image" src="delete.png" className='deleteIcon' />
          </div>
        </div>
    </div>
  )
}

export default ProductCard