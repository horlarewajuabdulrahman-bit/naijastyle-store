import React from "react";

export default function ProductModal({ product, onClose, addToCart }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <img src={product.img} alt={product.name} className="modal-img" loading="lazy" />

        <div className="modal-details">
          <h2>{product.name}</h2>
          <p className="modal-desc">{product.desc}</p>
          <h3 className="modal-price">₦{product.price.toLocaleString()}</h3>

          <button className="add-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}