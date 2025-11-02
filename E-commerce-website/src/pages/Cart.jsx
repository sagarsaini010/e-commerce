import React, { useState } from 'react'
const Cart = ({ cartlist }) => {
  const [newCartlist, setNewCartlist] = useState(cartlist)
  const handleClick = (id) => {
    const updatedCart = newCartlist.filter(item => item.id !== id);
    setNewCartlist(updatedCart);
  };

  return (
    <div className="p-4 max-w-[1100px] mx-auto">
      {/* Cart page implementation */}
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="cart-items">
        {/* Render cart items here */}
        {newCartlist.length > 0 ? (
          newCartlist.map((item, index) => (
            <div key={index} className="cart-item border-b py-4">
              <img className=" w-24 " src={item.image} alt={item.title} />
              <h2 className="font-bold">{item.title}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleClick(item.id)} className='w-50 mt-4 rounded bg-red-500 text-white'>Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is currently empty.</p>
        )}
      </div>
    </div>
  )
}

export default Cart