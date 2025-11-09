import React, { useEffect, useState } from "react";

export default function Cart({ cartItems = [], removeFromCart, clearCart, onCheckout }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + Number(item?.price || 0),
      0
    );
    setTotal(totalPrice);
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <section className="cart">
        <h2>Your Cart is Empty</h2>
        <p>Browse our products and add items to your cart.</p>
      </section>
    );
  }

  return (
    <section className="cart">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>
                {item.price.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                })}
              </p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>
          Total:{" "}
          {total.toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })}
        </h3>
        <button className="checkout-btn" onClick={onCheckout}>
          Check Out
        </button><br />
        <button className="clear-btn" onClick={clearCart}>
          Clear Cart
        </button><br />
      
      </div>
    </section>
  );
}