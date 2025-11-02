import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import axios from 'axios';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Cart from './pages/Cart';
import Login from './pages/Login';

const App = () => {
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
      <Navbar />
      <div className="pt-20 px-4"> {/* Padding to avoid overlap with fixed nav */}
        <Routes>
          <Route path="/" element={<Home cardData={cardData}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      </>
   

  )
}

export default App