import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { Phone, MapPin, Shield, Car, Sparkles, Sun, CheckCircle, ArrowRight, Mail } from 'lucide-react';
import './styles.css';

function App() {
  const services = [
    { icon: <Shield />, title: 'Paint Protection Film', text: 'Protect your paint from rock chips, road debris, scratches, and everyday wear with clear PPF installs.' },
    { icon: <Sun />, title: 'Window Tint', text: 'Upgrade privacy, reduce heat, protect interiors, and give your vehicle a cleaner finished look.' },
    { icon: <Car />, title: 'Vinyl Wraps', text: 'Custom vinyl installs, accents, trim blackouts, color changes, and styling upgrades for your vehicle.' },
    { icon: <Sparkles />, title: 'Detail-Focused Installs', text: 'Clean edges, careful prep, and professional results for customers who care about the final finish.' },
  ];

  const benefits = ['Automotive film specialists', 'PPF, tint, and vinyl services', 'Clean, professional installations', 'Local service in Northwest Arkansas'];

  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#top" aria-label="Wicked Auto Films home">
          <div className="brand-mark">W</div>
          <div><strong>Wicked Auto Films</strong><span>PPF • Tint • Vinyl</span></div>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button light" href="#contact">Get a Quote</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-grid">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="pill">Premium automotive film installs in Northwest Arkansas</p>
              <h1>Protect it. Tint it. Wrap it.</h1>
              <p className="hero-text">Wicked Auto Films helps your vehicle look sharper and stay protected with paint protection film, window tint, and vinyl installation services.</p>
              <div className="hero-actions">
                <a className="button light" href="#contact">Request a Quote <ArrowRight size={18} /></a>
                <a className="button outline" href="#services">View Services</a>
              </div>
            </motion.div>

            <motion.div className="feature-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="feature-inner">
                <div>
                  <p className="eyebrow">Wicked Auto Films</p>
                  <h2>Clean installs. Wicked finish.</h2>
                </div>
                <div className="check-list">
                  {benefits.map((item) => <div key={item}><CheckCircle size={20} /><span>{item}</span></div>)}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>What we install</h2>
            <p>From protection to style, Wicked Auto Films gives your vehicle a cleaner, sharper, more finished look.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => <article className="service-card" key={service.title}><div className="icon">{service.icon}</div><h3>{service.title}</h3><p>{service.text}</p></article>)}
          </div>
        </section>

        <section id="why-us" className="split-section">
          <div className="split-grid">
            <div><p className="eyebrow">Why choose us</p><h2>Built for people who care about the details.</h2></div>
            <div className="why-copy">
              <p>Whether you need PPF for protection, tint for privacy and heat rejection, or vinyl for a custom look, every job starts with proper prep and ends with a clean finish.</p>
              <div className="benefit-boxes">{benefits.map((item) => <div key={item}><CheckCircle size={20} /> {item}</div>)}</div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div>
              <p className="eyebrow dark">Get a quote</p>
              <h2>Ready to upgrade your vehicle?</h2>
              <p>Send over your vehicle year, make, model, and the service you’re interested in. We’ll help you figure out the right option.</p>
            </div>
            <div className="contact-links">
              <a href="tel:"><Phone /> <span><strong>Call or text</strong><small>Add your phone number here</small></span></a>
              <a href="mailto:?subject=Quote%20Request%20-%20Wicked%20Auto%20Films"><Mail /> <span><strong>Email for a quote</strong><small>Add your email address here</small></span></a>
              <a href="https://maps.google.com/?q=504+Concord+St,+Lowell,+AR+72745" target="_blank" rel="noreferrer"><MapPin /> <span><strong>Visit us</strong><small>504 Concord St, Lowell, AR 72745</small></span></a>
            </div>
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Wicked Auto Films. All rights reserved.</footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
