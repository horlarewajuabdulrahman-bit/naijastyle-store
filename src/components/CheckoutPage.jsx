import React from "react";
import "./CheckoutPage.css";

export default function CheckoutPage({ cartItems, clearCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    const orderHistory = JSON.parse(localStorage.getItem("orders") || "[]");

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem("orders", JSON.stringify([...orderHistory, newOrder]));
    clearCart();

    alert("Payment successful! Your order has been saved.");
    window.location.href = "/orders"; // Redirect to order history
  };

  return (
    <div className="checkout-container">
      <h2>Checkout Summary</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} — ₦{item.price.toLocaleString()}
              </li>
            ))}
          </ul>

          <h3>Total: ₦{total.toLocaleString()}</h3>

          <button onClick={handlePayment} className="pay-btn">
            Confirm Payment
          </button>
        </>
      )}
    </div>
  );
}