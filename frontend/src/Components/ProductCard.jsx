import React from 'react'
import "../styles/ProductCard.css"

const ProductCard = ({product}) => {
  return (
    <div className='card'>
        <img className="productImg" src={product.image} alt={product.name} />
        <div className='productFields'>
          <div className='cardText'>
            <p1 className='productName'>{product.name}</p1> 
            <br/>
            <p1 className='productPrice'>{Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(product.price)}</p1>
          </div>
          <div className="iconController">
            <input type="image" src="edit.png" className='editIcon '/>
            <input type="image" src="delete.png" className='deleteIcon' />
          </div>
        </div>
        
        <h1>{product.key}</h1>
    </div>
  )
}

export default ProductCard