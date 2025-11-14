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

      </div>
  

  );
}
export default Hero;