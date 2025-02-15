import React from "react";
import { Icon } from "@iconify/react";
import "./Cart.css";

const Cart = ({ cartItems, setCartItems }) => {
  const handleDelete = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <button onClick={() => handleDelete(index)} className="delete-btn">
                  <Icon icon="mdi:delete" className="delete-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <p>Total items: {cartItems.length}</p>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
