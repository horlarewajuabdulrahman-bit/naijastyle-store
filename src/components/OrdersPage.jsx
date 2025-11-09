import React, { useState } from "react";
import "./OrdersPage.css";

export default function OrdersPage() {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders") || "[]")
  );

  const clearOrders = () => {
    if (window.confirm("Are you sure you want to clear all order history?")) {
      localStorage.removeItem("orders");
      setOrders([]); // Clears from UI
      alert("✅ All order history cleared.");
    }
  };

  return (
    <div className="orders-page">
      <h2>Order History</h2>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <>
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <h3>Order #{order.id}</h3>
              <p>Date: {order.date}</p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.name} — ₦{item.price.toLocaleString()}
                  </li>
                ))}
              </ul>
              <strong>Total: ₦{order.total.toLocaleString()}</strong>
            </div>
          ))}

          <button className="clear-btn" onClick={clearOrders}>
            Clear Order History
          </button>
          <button className="home-btn" onClick={() => window.location.href = "/"}>Back to Home</button>
        </>
      )}
    </div>
  );
}