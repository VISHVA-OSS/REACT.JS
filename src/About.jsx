import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      {/* Header */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>We build simple, modern and user-friendly web experiences.</p>
      </section>

      {/* Content */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are a passionate team focused on creating clean, responsive
            websites and applications. Our goal is to deliver high-quality
            digital products that are easy to use and visually appealing.
          </p>

          <h2>Our Mission</h2>
          <p>
            To help people and businesses grow by building fast, reliable and
            modern web solutions.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="About us"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
