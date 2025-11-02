import React from 'react';
import Style from '../styles/components/ProductCard.module.scss';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, handleAddToCart}) => {

  const handleAddClick = () => {
    handleAddToCart(product);
  };

  return (

      <div className={`${Style.ProductCard}  p-4 border w-70 border-gray-200 rounded-lg shadow-md`}>
     
    <Link to={`/product/${product.id}`}>
      <div className={`flex justify-center w-full mb-4`}>
        <img className={`h-48 w-auto position-center`} src={product.image} alt="Product" />
      </div>
       </Link>
      <div className={`w-full flex flex-col gap-2 items-start`}>
      <h2 className={`font-bold text-lg`}>{product.title.slice(0, 20) + '....'}</h2>

      <span className={`text-gray-600`}>${product.price}</span>
      <div className="rating">
        {'⭐'.repeat(Math.round(product.rating.rate))} ({product.rating.count})
      </div>
     
    </div>
     <button onClick={handleAddClick} className={`mt-4 bg-blue-500 w-full hover:p-[-4px] text-white py-2 px-4 rounded`}>Add to Cart</button>
    </div>
   
  );
};

export default ProductCard;
