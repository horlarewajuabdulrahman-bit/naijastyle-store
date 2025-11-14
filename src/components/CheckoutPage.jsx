import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutPage({ cartItems, clearCart }) {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a fake order
    const newOrder = {
      id: Date.now(),
      name,
      total,
      date: new Date().toLocaleString(),
      items: cartItems,
    };

    // Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    clearCart();
    alert("✅ Order placed successfully!");
    navigate("/orders");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} — ₦{item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ₦{total}</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Card Number"
              value={card}
              onChange={(e) => setCard(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
            <button type="submit">Place Order</button>
          </form>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;