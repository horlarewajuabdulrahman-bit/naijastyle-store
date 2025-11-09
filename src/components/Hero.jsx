import React from "react";

function Hero() {
  const handleShopNow = () => {
    const ShopSection = document.getElementById("shop");
    if (ShopSection) {
      ShopSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
      <div className="hero-container">

          <button className="shop-now" onClick={handleShopNow}>Shop Now</button>
      </div>
  

  );
}
export default Hero;