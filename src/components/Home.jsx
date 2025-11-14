import React from "react";
import Banner from "./Banner";
import Hero from "./Hero";
import ProductList from "./ProductList";


const handleSubscribe = () => {
  const emailField = document.getElementById("newsletterEmail");
  const message = document.getElementById("subscribeMessage");
  const email = emailField.value.trim();

  if (!email) {
    message.textContent = "Please enter a valid email.";
    return;
  }

  let subscribers = JSON.parse(localStorage.getItem("subscribers") || "[]");
  subscribers.push(email);
  localStorage.setItem("subscribers", JSON.stringify(subscribers));

  message.textContent = "Subscribed successfully!";
  
  emailField.value = "";
};
const Home = ({ addToCart }) => {
  return (
    <div className="home-container">

      <Banner />
      <Hero />

      <section className="home-section">
    
        <ProductList addToCart={addToCart} />
      </section>

      <section className="home-section why-us">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>Premium Quality</h3>
            <p>All accessories are carefully selected for durability & style.</p>
          </div>
          <div className="why-card">
            <h3>Fast Delivery</h3>
            <p>We ship orders within 24 hours anywhere nationwide.</p>
          </div>
          <div className="why-card">
            <h3>24/7 Support</h3>
            <p>Our team is always ready to assist you anytime.</p>
          </div>
          <div className="why-card">
            <h3>Affordable Prices</h3>
            <p>Best prices guaranteed on every item you purchase.</p>
          </div>
        </div>
      </section>

      <section className="home-section testimonials">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="test-grid">
          <div className="test-card">
            <p>“Amazing quality! My headset lasted over a year and still works like new.”</p>
            <h4>Sarah K.</h4>
          </div>
          <div className="test-card">
            <p>“Fast delivery and excellent customer service. I love this store!”</p>
            <h4>Michael O.</h4>
          </div>
          <div className="test-card">
            <p>“Best accessories shop I’ve found. Affordable and reliable.”</p>
            <h4>Amina T.</h4>
          </div>
        </div>
      </section>

      <section className="promo-banner">
        <h2>Limited-Time Offer</h2>
        <p>Get <strong>10% OFF</strong> your first order!</p>
        <button
          onClick={() => (window.location.href = "/products")}
          className="promo-btn"
        >
          Shop Now
        </button>
      </section>

      <section className="newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <p>Get updates on new arrivals & special deals.</p>
        <div className="newsletter-box">
          <input type="email" placeholder="Enter your email…" id="newsletterEmail"/>
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
        <p id="subscribeMessage" className="subscribe-msg"></p>
    
      </section>

      <footer className="main-footer">
        <p>{new Date().getFullYear()} All Rights Reserved.</p>
      </footer>

    </div>
  );
};

export default Home;