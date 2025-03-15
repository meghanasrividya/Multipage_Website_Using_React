import React from 'react';
import { useCart } from "../context/CartContext"; // ✅ Correct Import

const Checkout = () => {
  const { cart } = useCart(); // ✅ Access cart from context

  const handleCheckout = () => {
    // Implement payment and order placement logic
    alert('Order placed successfully!');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
