import React from "react";

function Services() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p>We provide excellent tailoring and fashion solutions for all our customers.</p>

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
          <h3>Fast Delivery</h3>
          <p>Get your orders quickly and reliably.</p>
        </div>
        <div className="service-card">
          <i className="fa fa-lock"></i>
          <h3>Secure Payments</h3>
          <p>Your transactions are safe with us.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;