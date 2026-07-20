import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ServicesDetail from './components/ServicesDetail';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  // Update document metadata for better SEO
  useEffect(() => {
    document.title = "Milan Imperial Limited | Aviation, Agro-Business & General Contracting";

    // Add meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Milan Imperial Limited offers premium private charter consultancy, general contractors, agro-business financing, and procurement services globally.";
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <About />
        <ServicesDetail />
      </main>

      {/* Basic Contact Form / CTA Section (Could be separate Component) */}
      <section className="section bg-light" id="contact">
        <div className="container max-w-4xl text-center">
          <h2 className="heading-lg mb-6">Ready to Elevate Your Expectations?</h2>
          <p className="text-lead mx-auto mb-10">
            Contact our dedicated consultancy team today to discuss tailored management and procurement solutions.
          </p>
          <a href="mailto:contact@milanimperial.com" className="btn btn-primary text-lg px-8 py-4 glow-effect">
            Initiate Contact
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
