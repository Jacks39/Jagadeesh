import React from "react";
import "./App.css";

import mainLogo from "./assets/Main ID 1.png";
import rectangle5544 from "./assets/Rectangle 5544.png";
import rectangle5545 from "./assets/Rectangle 5545.png";
import rectangle5549 from "./assets/Rectangle 5549.png";
import group1428 from "./assets/Group 1428.png";
import group1429 from "./assets/Group 1429.png";

function App() {
  return (
    <div className="page">

      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="header-logo">
          <img src={mainLogo} alt="Nithish Software Solutions" />
        </div>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#book">Book Medicine</a>
          <a href="#doctors">Find Doctors</a>
          <a href="#nurses">Find Nurses</a>
          <a href="#about" className="active">About Us</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <div className="header-actions">
          <button type="button">⚙</button>
          <button type="button" className="notification">
            ♡
            <span>1</span>
          </button>
          <button type="button">◉</button>
        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <div className="hero-image hero-image-left">
          <img src={rectangle5544} alt="Healthcare professional" />
        </div>

        <div className="hero-image hero-image-right">
          <img src={rectangle5545} alt="Doctor" />
        </div>

        <div className="hero-content">
          <h1>
            About <span>Us</span>
          </h1>

          <p>
            Dedicated to connecting patients with trusted
            healthcare professionals anytime, anywhere.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              Book Appointment
              <span>→</span>
            </button>

            <button className="secondary-button">
              Contact Us
              <span>→</span>
            </button>
          </div>
        </div>
      </section>


      {/* ================= WHO WE ARE ================= */}
      <section className="who-section" id="about">

        <div className="who-content">

          <div className="section-label">
            WHO WE ARE
          </div>

          <h2>
            Healthcare That Puts
            <br />
            <span>You First</span>
          </h2>

          <p className="who-main-text">
            Nithish Software Solutions Pvt. Ltd. provides a modern healthcare
            platform that connects patients, doctors, nurses and pharmacies
            in one place.
          </p>

          <p>
            Our goal is to simplify healthcare access by offering online
            appointment booking, teleconsultation services, pharmacy support
            and healthcare management solutions.
          </p>

          <p className="blue-text">
            We believe quality healthcare should be accessible, convenient
            and available 24/7.
          </p>

        </div>

        <div className="commitment-image">

          <img
            src={rectangle5549}
            alt="Healthcare services"
          />

          <div className="commitment-card">

            <div className="commitment-icon">
              ✓
            </div>

            <div className="commitment-text">
              <strong>Our Commitment</strong>
              <span>Better Health</span>
              <span>Better Tomorrow</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= MISSION & VISION ================= */}
      <section className="mission-section">

        <div className="mission-item">

          <div className="mission-icon">
            🎯
          </div>

          <div>
            <h3>Our Mission</h3>

            <p>
              To make healthcare accessible, affordable and efficient
              through technology-driven solutions.
            </p>
          </div>

        </div>

        <div className="mission-divider"></div>

        <div className="mission-item">

          <div className="mission-icon">
            👁
          </div>

          <div>
            <h3>Our Vision</h3>

            <p>
              To become a leading digital healthcare ecosystem that
              improves patient care and empowers medical professionals.
            </p>
          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="normal-section">

        <h2 className="section-title">
          Why Choose <span>Us</span>
        </h2>

        <div className="why-grid">

          <div className="why-card">
            <div className="round-icon">24/7</div>
            <h3>24/7 Availability</h3>
            <p>
              Healthcare support available anytime, anywhere.
            </p>
          </div>

          <div className="why-card">
            <div className="round-icon">♙</div>
            <h3>Experienced Doctors</h3>
            <p>
              Connect with highly qualified and experienced doctors.
            </p>
          </div>

          <div className="why-card">
            <div className="round-icon">✓</div>
            <h3>Secure Consultations</h3>
            <p>
              Your data and consultations are secure.
            </p>
          </div>

          <div className="why-card">
            <div className="round-icon">▣</div>
            <h3>Fast Booking</h3>
            <p>
              Book appointments quickly and easily.
            </p>
          </div>

          <div className="why-card">
            <div className="round-icon">♧</div>
            <h3>Trusted Network</h3>
            <p>
              A wide network of trusted healthcare experts.
            </p>
          </div>

          <div className="why-card">
            <div className="round-icon">▤</div>
            <h3>Digital Records</h3>
            <p>
              Access your medical records anytime.
            </p>
          </div>

        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="normal-section" id="book">

        <h2 className="section-title">
          Our <span>Services</span>
        </h2>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon">👨‍⚕️</div>
            <div>
              <h3>Doctor Consultation</h3>
              <p>
                Connect with certified healthcare professionals online
                or in person.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">📅</div>
            <div>
              <h3>Appointment Booking</h3>
              <p>
                Easy online scheduling with your preferred doctors.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">💊</div>
            <div>
              <h3>Online Pharmacy</h3>
              <p>
                Order medicines quickly and safely with home delivery.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">👩‍⚕️</div>
            <div>
              <h3>Nursing Support</h3>
              <p>
                Professional nursing assistance and patient care.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ================= CORE VALUES ================= */}
      <section className="core-values-section">

        <h2 className="section-title">
          Our Core <span>Values</span>
        </h2>

        <div className="values-grid">

          <div className="value-card">
            <div className="value-icon pink">♥</div>

            <div>
              <h3>Patient First</h3>
              <p>
                Every decision revolves around patient care and
                well-being.
              </p>
            </div>
          </div>

          <div className="value-card">
            <div className="value-icon blue">✓</div>

            <div>
              <h3>Trust &amp; Security</h3>
              <p>
                Providing healthcare data with advanced security
                and privacy.
              </p>
            </div>
          </div>

          <div className="value-card">
            <div className="value-icon green">☼</div>

            <div>
              <h3>Innovation</h3>
              <p>
                Leveraging technology to improve healthcare delivery.
              </p>
            </div>
          </div>

          <div className="value-card">
            <div className="value-icon orange">♥</div>

            <div>
              <h3>Compassion</h3>
              <p>
                Providing care with empathy, respect and
                professionalism.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          MEET OUR TEAM
          
          OLD HEADING/CARDS REMOVED.
          GROUP 1428 IMAGE IS USED DIRECTLY.
      ===================================================== */}
      <section className="team-section" id="doctors">

        <img
          src={group1428}
          alt="Meet Our Team"
          className="team-full-image"
        />

      </section>


      {/* ================= CTA ================= */}
      <section className="cta-section" id="nurses">

        <div className="cta-person">
          <img
            src={group1429}
            alt="Healthcare professional"
          />
        </div>

        <div className="cta-content">

          <h2>
            Ready to Take Charge of Your Health?
          </h2>

          <p>
            Book appointments, consult doctors and access
            healthcare services anytime.
          </p>

        </div>

        <div className="cta-buttons">

          <button className="cta-button white">
            Book Appointment →
          </button>

          <button className="cta-button transparent">
            Contact Us →
          </button>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer" id="contact">

        <div className="footer-grid">

          <div className="footer-brand">

            <img
              src={mainLogo}
              alt="Nithish Software Solutions"
            />

            <p>
              We connect patients with trusted doctors,
              nurses, and healthcare services for a healthier
              tomorrow.
            </p>

          </div>


          <div className="footer-column">

            <h3>Quick Links</h3>

            <a href="#home">› Home</a>
            <a href="#about">› About Us</a>
            <a href="#doctors">› Doctors</a>
            <a href="#nurses">› Departments</a>
            <a href="#contact">› Contact Us</a>

          </div>


          <div className="footer-column">

            <h3>Our Services</h3>

            <a href="#book">› Appointment Booking</a>
            <a href="#">› Online Consultation</a>
            <a href="#">› Online Pharmacy</a>
            <a href="#">› Nursing Support</a>
            <a href="#">› Health Checkups</a>

          </div>


          <div className="footer-column contact-column">

            <h3>Contact Us</h3>

            <p>📞 +91 7901311555</p>

            <p>
              ✉ hr.nss@nrssorg.com
            </p>

            <p>
              📍 Eswar Plaza, Dwaraka Nagar,
              Visakhapatnam, Andhra Pradesh 530016
            </p>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Nithish Software Solutions Pvt. Ltd.
            All Rights Reserved.
          </span>

          <span className="follow-us">
            Follow Us On&nbsp;&nbsp;
            <b>f</b>
            <b>in</b>
            <b>◎</b>
            <b>◉</b>
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;