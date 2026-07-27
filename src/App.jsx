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

const DEFAULT_DESCRIPTION =
  "Milan Imperial Limited — West Africa's trusted diversified enterprise delivering agro-business, business consulting, general contracting, and private charter consultancy since 2019.";

const DESCRIPTIONS = {
  '/about':
    'Milan Imperial Limited holds 775 plots — 51.7 hectares of Nigerian farmland across Benue, Taraba and Plateau — after more than doubling its land base in a single year. See our track record, our published targets, and how to invest whatever you are starting with.',
  '/agro':
    'Invest in Nigerian agriculture with an operator, not an agent. 775 plots owned, 8,000+ yam tubers harvested, first UK export underway. Bring capital and we provide land, farmers and buyers — or bring land and we will tell you what it can grow.',
  '/consulting':
    'Business consulting from Milan Imperial Limited — strategic advisory, procurement, staffing, financing, and agricultural entry advisory for investors with capital and landowners with idle ground.',
  '/contracting':
    'General contracting, construction supplies and project facilitation across Nigeria and West Africa — plus residential property acquisition in the United States, United Kingdom and Australia.',
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
    meta.content = DESCRIPTIONS[pathname] || DEFAULT_DESCRIPTION;
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
