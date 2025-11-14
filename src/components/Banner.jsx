import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const images = [
   
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1920&q=80",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="banner-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={`banner-image ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className="banner-overlay">
        <h1>Welcome to NaijaStyle</h1>
        <p>Unisex Fashion for Everyone</p>
      </div>
    </div>
  );
};

export default Banner;