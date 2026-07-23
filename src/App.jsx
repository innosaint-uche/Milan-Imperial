import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Agro from './pages/Agro';
import Consulting from './pages/Consulting';
import Contracting from './pages/Contracting';
import Charter from './pages/Charter';
import Contact from './pages/Contact';

const TITLES = {
  '/': 'Milan Imperial Limited | Creating Values — Agro-Business, Consulting, Contracting & Private Charter',
  '/about': 'About | Milan Imperial Limited',
  '/agro': 'Agro-Business, Farming & Financing | Milan Imperial Limited',
  '/consulting': 'Business Consulting & Services | Milan Imperial Limited',
  '/contracting': 'General Contracting & Facilitation | Milan Imperial Limited',
  '/charter': 'Private Charter Consultancy | Milan Imperial Limited',
  '/contact': 'Contact | Milan Imperial Limited',
};

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = TITLES[pathname] || 'Milan Imperial Limited';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content =
      "Milan Imperial Limited — West Africa's trusted diversified enterprise delivering agro-business, business consulting, general contracting, and private charter consultancy since 2019.";
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/agro" element={<Agro />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/contracting" element={<Contracting />} />
          <Route path="/charter" element={<Charter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
