import React, { useState } from 'react';
import './Page.css';
import './Apply';
import { Link } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const [expandedFaq, setExpandedFaq] = useState(null);
  const faqData = [
    {
      id: 1,
      question: "What documents do I need?",
      answer: "Valid ID, proof of income, and bank statements are typically required."
    },
    {
      id: 2,
      question: "How long is the approval process?",
      answer: "Most applications are processed within 24-48 hours."
    },
    {
      id: 3,
      question: "What are the interest rates?",
      answer: "Interest rates vary depending on the loan type and terms. Contact us for specific rates."
    },
    {
      id: 4,
      question: "What is the minimum credit score required?",
      answer: "Credit score requirements vary by loan type. We consider multiple factors beyond just credit scores."
    }
  ];


  return (
    <div className="app">
      {/* Header */}
      <header>
        <div className="logo">VOTA</div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
          <Link to="/apply">Apply Now</Link>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <h1>Fast & Reliable Loans with Vota</h1>
        <p>Get the funds you need with ease and transparency</p>
        <button className="cta-button"><Link to="/apply">Apply Now</Link></button>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>Vota Investment Ltd is your trusted partner in financial solutions. We provide quick, transparent, and reliable loan services to meet your needs.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Loan Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Personal Loans</h3>
            <p>Quick personal loans for your immediate needs</p>
          </div>
          <div className="service-card">
            <h3>Business Loans</h3>
            <p>Grow your business with our flexible financing options</p>
          </div>
          <div className="service-card">
            <h3>Payday Loans</h3>
            <p>Short-term loans to help you until your next paycheck</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Apply</h3>
            <p>Fill out our simple application form</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Approval</h3>
            <p>Quick review and approval process</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Disbursement</h3>
            <p>Receive your funds quickly</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
  <h2>Frequently Asked Questions</h2>
  <div className="faq-container">
    {faqData.map((faq) => (
      <div 
        key={faq.id} 
        className={`faq-card ${expandedFaq === faq.id ? 'expanded' : ''}`}
        onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
      >
        <div className="faq-question">
          <h3>{faq.question}</h3>
          <span className="faq-icon">{expandedFaq === faq.id ? '−' : '+'}</span>
        </div>
        <div className="faq-answer">
          <p>{faq.answer}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <Link to="/apply">Apply Now</Link>
          </div>
          <p className="copyright">© 2025 Vota Investment Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
