import React from 'react'
import ProductCard from '../components/ProductCard'
import Style from '../styles/pages/Home.module.scss';
const Home = ({cardData}) => {
  return (
    <div className={`mt-18 flex flex-wrap gap-6 justify-center max-w-[1580px] mx-auto p-4`}>
      {/* Home page implementation */}


      {cardData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Home