import React from 'react'
import ProductCard from '../components/ProductCard'
import Style from '../styles/pages/Home.module.scss';
const Home = ({cardData , handleAddToCart}) => {

 

  return (
    <div className={` flex flex-wrap gap-6 justify-center max-w-[1580px] mx-auto p-4`}>
      {/* Home page implementation */}
    

      {cardData.map((product) => (
        <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  )
}

export default Home