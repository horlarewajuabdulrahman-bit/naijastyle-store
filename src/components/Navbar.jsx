import React from "react";
import "./Navbar.css";

function Navbar({ cartCount }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <h2 className="navbar-logo" onClick={() => scrollToSection("home")}>
        NaijaStyle
      </h2>

      <nav className="navbar-links">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("services")}>Services</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
        <button onClick={() => scrollToSection("faq")}>FAQ</button>
        <button className="cart-btn" onClick={() => scrollToSection("cart")}>
         Cart ({cartCount})
        </button>
      </nav>
    </header>
  );
}

export default Navbar;