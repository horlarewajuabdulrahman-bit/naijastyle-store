import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Banner from "./components/Banner";
import CheckoutPage from "./components/CheckoutPage";
import OrdersPage from "./components/OrdersPage";
import "./index.css";

function App() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      alert(`${product.name} added to cart!`);
      return;
    }
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) =>
    setCartItems(cartItems.filter((item) => item.id !== product.id));

  const clearCart = () => setCartItems([]);

  const handleCheckout = () => {
    window.location.href = "/checkout";
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />

      <Routes>
        {/* ===== HOME PAGE ===== */}
        <Route
          path="/"
          element={
            <>
              <div id="home" className="page-section">
                <Banner />
                <Hero />
                <ProductList addToCart={addToCart} />
              </div>

              <section className="page-section" id="about">
                <h2>About NaijaStyle</h2>
                <p>
                  NaijaStyle brings you affordable and stylish Nigerian fashion
                  for every occasion. We believe fashion is more than just
                  clothing. It's a statement of creativity, confidence, and
                  individuality. Every piece in our collection is carefully
                  selected to combine comfort, quality, and the vibrant spirit
                  of Nigerian culture. Whether you're dressing up for a special
                  event or looking for everyday wear, NaijaStyle has something
                  for everyone.
                </p>
              </section>

              <section className="services-section" id="services">
                <h2>Our Services</h2>
                <p>
                  We provide excellent tailoring and fashion solutions for all
                  our customers.
                </p>

                <div className="services-container">
                  <div className="service-card">
                    <i className="fa fa-scissors"></i>
                    <h3>Custom Tailoring & Design</h3>
                    <p>Perfect fit suits made just for you.</p>
                  </div>

                  <div className="service-card">
                    <i className="fa fa-comments"></i>
                    <h3>Personalized Recommendations</h3>
                    <p>Find outfits that match your style.</p>
                  </div>

                  <div className="service-card">
                    <i className="fa fa-truck"></i>
                    <h3>Fast Delivery to Your Doorstep</h3>
                    <p>Get your order quickly and reliably.</p>
                  </div>

                  <div className="service-card">
                    <i className="fa fa-lock"></i>
                    <h3>Secure Payment Options</h3>
                    <p>Your transactions are safe with us.</p>
                  </div>
                </div>
              </section>

              <section className="page-section" id="contact">
                <Contact />
              </section>

              <section className="page-section" id="faq">
                <h2>Frequently Asked Questions</h2>
                <h3>What sizes do you offer?</h3>
                <p>
                  We offer sizes from XS to XXL. Please refer to our size chart
                  for details.
                </p>
                <h3>Do you offer international shipping?</h3>
                <p>
                  Currently, we ship only within Nigeria. Delivery times may
                  vary by location.
                </p>
                <h3>What is your return policy?</h3>
                <p>
                  Returns are accepted within 30 days for unworn items in
                  original condition. Contact us at{" "}
                  <strong>support@naijastyle.com</strong> for help.
                </p>
              </section>

              <section className="page-section" id="cart">
                <Cart
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                  onCheckout={handleCheckout}
                />
              </section>

              <footer className="back-to-home">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Back to Homepage
                </button>
              </footer>
            </>
          }
        />

        {/* ===== CHECKOUT PAGE ===== */}
        <Route
          path="/checkout"
          element={<CheckoutPage cartItems={cartItems} clearCart={clearCart} />}
        />

        {/* ===== ORDER HISTORY PAGE ===== */}
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </Router>
  );
}

export default App;