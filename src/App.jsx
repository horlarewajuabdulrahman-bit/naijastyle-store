import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate, useLocation,} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import FAQ from "./Pages/FAQ";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import CheckoutPage from "./components/CheckoutPage";
import OrdersPage from "./components/OrdersPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Signout from "./pages/Signout";
import "./index.css";

function ProtectedRoute({ user, element }) {
  const location = useLocation();
  return user ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

function AppInner() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (user) localStorage.setItem("loggedInUser", JSON.stringify(user));
    else localStorage.removeItem("loggedInUser");
  }, [user]);
  const addToCart = (product) => {
    if (cartItems.some((it) => it.id === product.id)) {
      alert(`${product.name} is already in your cart`);
      return;
    }
    setCartItems((prev) => [...prev, product]);
    alert(`${product.name} added to cart!`);
  };

  const removeFromCart = (product) =>
    setCartItems((prev) => prev.filter((it) => it.id !== product.id));

  const clearCart = () => setCartItems([]);

  const handleCheckout = () => {
    window.location.href = "/checkout";
  };

  return (
    <>
      <Navbar user={user} setUser={setUser} cartCount={cartItems.length} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/home" element={<Home addToCart={addToCart} />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />

        <Route path="/signout" element={<Signout setUser={setUser} />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute
              user={user}
              element={
                <Cart
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                  onCheckout={handleCheckout}
                />
              }
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute
              user={user}
              element={
                <CheckoutPage cartItems={cartItems} clearCart={clearCart} />
              }
            />
          }
        />

        <Route
          path="/orders"
          element={<ProtectedRoute user={user} element={<OrdersPage />} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <footer className="back-to-home">
        <button onClick={() => (window.location.href = "/")}>
          Back to Homepage
        </button>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}