import React from 'react'
import Style from '../styles/components/Navbar.module.scss';
import { Link } from 'react-router-dom';
const Navbar = ({ cartlist }) => {
  return (
    <nav className=" shadow-md px-4 py-3 flex bg-red-300 justify-between items-center fixed w-full top-0 z-10">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-[#e73a1b]">
        ShopEase
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/cart" className="hover:text-red-500">Cart</Link>
      </div>

      {/* Cart Icon */}
      <Link to="/cart" className="relative bg-[#e73a1b] text-white px-3 py-2 rounded-md hover:bg-red-600">
        🛒
        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1 rounded-full">
          {cartlist.length}
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
