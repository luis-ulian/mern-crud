import React, { useEffect } from 'react';
import "../styles/HomePage.css";
import ProductCard from '../components/ProductCard.jsx';
import { useProductStore } from '../store/useProductStore.js';

const HomePage = () => {
  const {getProducts, products} = useProductStore();

  useEffect(()=>{
    getProducts();
  }, [getProducts]);

  return (
    <div className='homePage'>
      <div className='homePageController'>
        <div className='container'>
          {products.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
};

export default HomePage