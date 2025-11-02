import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import axios from 'axios';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';


const App = () => {

 const [cartlist, setCartlist] = useState([]);
    const handleAddToCart = (cardData) => {
      let newCartItem = [...cartlist];
      const existingItem = newCartItem.find(item => item.id === cardData.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        newCartItem.push({ ...cardData, quantity: 1 });
      }
      setCartlist(newCartItem);
      console.log("Cart List:", newCartItem);
    };

 const [cardData, setCardData] = useState([]); // Step 1: Create state

  useEffect(() => {
    fetchData(); // Step 2: Fetch data on mount
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setCardData(response.data); // Step 3: Store data in state
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


  return (
    
  <>
      <Navbar cartlist={cartlist} />
      <div className="pt-20 px-4"> {/* Padding to avoid overlap with fixed nav */}
        <Routes>
          <Route path="/" element={<Home cardData={cardData} handleAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cartlist={cartlist} />} />
          <Route path="/product/:id" element={<ProductDetail cardData={cardData} handleAddToCart={handleAddToCart} />} />
        </Routes>
      </div>
      </>
   

  )
}

export default App