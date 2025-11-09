import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const images = [
    "https://media.istockphoto.com/id/2198116709/photo/high-angle-view-of-townscape-against-sky.jpg?s=612x612&w=0&k=20&c=c6-Jymo5XaznGZT45rGc1yi2ux-YaaNc8-gcDLKZYDE=",
    "https://media.istockphoto.com/id/2229767527/photo/banner-with-multiracial-team-of-business-people-standing-together-and-holding-hands.jpg?s=612x612&w=0&k=20&c=s4sVeSDTJHneFqrn1goL6OCfm99Y_Q-gQQWSOoXE34Y=",
    "https://images.unsplash.com/photo-1573735623313-8de356363b56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHN1aXQlMjBtYXRlcmlhbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
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