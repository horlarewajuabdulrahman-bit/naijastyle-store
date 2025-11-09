import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function ProductList({ addToCart }) {
  const [category, setCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    category === "all" ? products : products.filter((p) => p.category === category);

  return (
    <div className="shop-section" id="shop">
      <h2>Shop Our Products</h2>

      

      <div className="category-buttons">
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("men")}>Men</button>
        <button onClick={() => setCategory("women")}>Women</button>
      </div>

      <div className="items-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} openModal={setSelectedProduct} />
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        addToCart={addToCart}
      />
    </div>
  );
}