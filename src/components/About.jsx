import React from "react";

function About() {
  return (
    <section className="about-page page-section">
      <h2>About NaijaStyle</h2>
      <p>
        NaijaStyle brings you affordable and stylish Nigerian fashion for every occasion. 
        We believe fashion is more than just clothing — it’s a statement of creativity, 
        confidence, and individuality. 
      </p>
      <p>
        Every piece in our collection is carefully selected to combine comfort, quality, 
        and the vibrant spirit of Nigerian culture. Whether you’re dressing up for a 
        special event or looking for everyday wear, NaijaStyle has something for everyone.
      </p>

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1585386959984-a415522316d6"
          alt="NaijaStyle fashion"
          style={{ width: "100%", borderRadius: "12px", marginTop: "1rem" }}
        />
      </div>
    </section>
  );
}

export default About;