import React from "react";

export default function ProductCard({ product, openModal }) {
  return (
    <div className="item" onClick={() => openModal(product)}>
      <img src={product.img} alt={product.name} className="product-img" loading="lazy" />
      <h3>{product.name}</h3>
      <p>{product.desc}</p>
      <h4>₦{product.price.toLocaleString()}</h4>
    </div>
  );
}