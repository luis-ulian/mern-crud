import React from 'react'
import "../styles/HomePage.css"
import ProductCard from '../components/ProductCard.jsx'
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
};

export default HomePage