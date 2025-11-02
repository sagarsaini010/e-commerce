import React from 'react'
import { useParams } from "react-router-dom";

const ProductDetail = ({ cardData, handleAddToCart }) => {
  const handleAddClick = () => {
    handleAddToCart(product);
  };
   const { id } = useParams();
   const productData = cardData.find(item => item.id === parseInt(id));
    const product = productData || {};
  return (
    <div className="gap-8 p-4 max-w-[800px] mt-15 flex flex-col justify-center items-center mx-auto  shadow-md">
      {/* ProductDetail page implementation */}
      <div className="img-container w-1/2  flex justify-center items-center">
        <img className='w-70 h-auto' src={product.image} alt="" />
      </div>
      <div className="info-container w-8/10 flex flex-col">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <p className="mb-4">{product.description}</p>
        <span className="text-3xl font-semibold mb-4 block">${product.price}</span>
        <div className="flex items-center gap-4 mb-4">
          <button onClick={handleAddClick} className="bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail