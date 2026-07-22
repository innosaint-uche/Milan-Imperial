import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks, LOGO } from '../data/site';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, toggleDark] = useDarkMode();
  const { pathname } = useLocation();

  // Transparent over the hero on every page; solid once scrolled past it.
  const transparent = !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Text/treatment: light text when floating over the dark hero, otherwise themed.
  const overHero = transparent;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent py-1'
          : 'py-2 bg-sand/90 dark:bg-ink/90 backdrop-blur-md border-b border-teal/10 dark:border-white/10'
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0" aria-label="Milan Imperial Limited home">
          <img
            src={LOGO}
            alt="Milan Imperial Limited"
            className={`${scrolled ? 'h-20 md:h-24' : 'h-32 md:h-40'} w-auto object-contain transition-all duration-300 ${overHero ? 'brightness-0 invert' : ''}`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `whitespace-nowrap text-xs font-semibold tracking-[0.15em] uppercase transition-colors ${
                  overHero
                    ? 'text-white/80 hover:text-white'
                    : 'text-teal/80 dark:text-sand/80 hover:text-gold dark:hover:text-gold'
                } ${isActive && !overHero ? '!text-gold' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className={`grid place-items-center h-9 w-9 rounded-full border transition-colors ${
              overHero
                ? 'border-white/40 text-white hover:bg-white/10'
                : 'border-teal/30 dark:border-sand/30 text-teal dark:text-sand hover:border-gold hover:text-gold'
            }`}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Link
            to="/contact"
            className={`hidden sm:inline-flex btn !px-6 !py-2.5 whitespace-nowrap ${
              overHero ? 'border-white/50 text-white hover:bg-white hover:text-teal' : 'btn-gold'
            }`}
          >
            Get in Touch
          </Link>

          <button
            className={`xl:hidden ${overHero ? 'text-white' : 'text-teal dark:text-sand'}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[28rem]' : 'max-h-0'
        } bg-sand dark:bg-ink border-t border-teal/10 dark:border-white/10`}
      >
        <nav className="container-x flex flex-col py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className="py-3 text-sm font-semibold tracking-[0.12em] uppercase text-teal dark:text-sand hover:text-gold border-b border-teal/5 dark:border-white/5"
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-gold mt-4">
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
