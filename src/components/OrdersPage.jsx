import React, { useEffect, useState } from "react";
import "./OrdersPage.css";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(storedOrders);
  }, []);

  const clearOrderHistory = () => {
    localStorage.removeItem("orders");
    setOrders([]);
  };

  return (
    <div className="orders-page">
      <h2 className="orders-title">My Orders</h2>

      {orders.length > 0 && (
        <button className="clear-orders-btn" onClick={clearOrderHistory}>
          Clear Order History
        </button>
      )}

      {orders.length === 0 ? (
        <p className="no-orders">No orders found.</p>
      ) : (
        <ul className="orders-list">
          {orders.map((order) => (
            <li key={order.id} className="order-card">
              <h4 className="order-id">Order #{order.id}</h4>
              <p className="order-info">
                Total: ₦{order.total} — {order.date}
              </p>

              <ul className="order-items">
                {order.items.map((item) => (
                  <li key={item.id} className="order-item">
                    {item.name}
                  </li>
                ))}
              </ul>

              <hr className="divider" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrdersPage;