import React from 'react'
import "../Styles/HomePage.css"
import ProductCard from '../Components/ProductCard.jsx'
const HomePage = () => {
  return (

  <div className='homePage'>
    <div className='homePageController'>
      <div className='container'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  </div>
  )
}

export default HomePage