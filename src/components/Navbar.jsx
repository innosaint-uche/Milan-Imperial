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
          ? 'bg-transparent py-4'
          : 'py-3 bg-sand/90 dark:bg-ink/90 backdrop-blur-md border-b border-teal/10 dark:border-white/10'
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4">
        {/* Logo lives in a nav-item-sized wrapper (self-stretch), so the wrapper — not the
            oversized logo — sets the bar height. When floating over the hero the logo is large
            and overflows downward; once scrolled it shrinks to sit inside the solid bar. */}
        <Link
          to="/"
          className="relative shrink-0 self-stretch w-28 md:w-40 flex items-center"
          aria-label="Milan Imperial Limited home"
        >
          <img
            src={LOGO}
            alt="Milan Imperial Limited"
            className={`absolute left-0 w-auto object-contain transition-all duration-300 ${
              scrolled ? 'top-1/2 -translate-y-1/2 h-11 md:h-12' : 'top-0 h-16 md:h-20'
            } ${overHero ? 'brightness-0 invert' : ''}`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `group relative whitespace-nowrap text-xs font-semibold tracking-[0.15em] uppercase transition-colors ${
                  overHero
                    ? 'text-white/80 hover:text-white'
                    : 'text-teal/80 dark:text-sand/80 hover:text-gold dark:hover:text-gold'
                } ${isActive && !overHero ? '!text-gold' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`pointer-events-none absolute -bottom-1.5 left-0 h-0.5 bg-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
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
            className={`lg:hidden ${overHero ? 'text-white' : 'text-teal dark:text-sand'}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
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
