import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks, LOGO } from '../data/site';
import useDarkMode from '../hooks/useDarkMode';

// The logo artwork sits high inside its own SVG canvas — there is empty space
// below the mark — so vertically centring the <img> does not visually centre the
// logo. This lifts the menu row to match the logo's optical centre.
//
// Tune this ONE value; it is applied to both the nav links and the right-hand
// controls so they stay aligned with each other. It must stay a complete literal
// string: Tailwind scans source text, so a class assembled at runtime would never
// be generated.
const NAV_LIFT = 'lg:-translate-y-[28px]';

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
        {/* Drops the logo below the nav row on large screens. Note the modifier
            order: `lg:pt-*`, not `!lg:pt-*` — Tailwind ignores the latter. */}
        <Link to="/" className="flex items-center shrink-0 lg:pt-4" aria-label="Milan Imperial Limited home">
          <img
            src={LOGO}
            alt="Milan Imperial Limited"
            // h-30/h-34 are not on Tailwind's scale (24 → 28 → 32 → 36), so the
            // equivalent arbitrary values are used: 7.5rem = 120px, 8.5rem = 136px.
            className={`${scrolled ? 'h-16 md:h-[7.5rem]' : 'h-20 md:h-[8.5rem]'} w-auto object-contain transition-all duration-300 ${overHero ? 'brightness-0 invert' : ''}`}
          />
        </Link>

        {/* Desktop nav — lifted by NAV_LIFT to sit level with the logo. The shift
            is a transform, so it is painted only and changes no layout. */}
        <nav className={`hidden lg:flex items-center gap-7 ${NAV_LIFT}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                // Underline marks the active route only; hover is a colour shift.
                `relative whitespace-nowrap text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 hover:text-gold ${
                  overHero
                    ? isActive
                      ? 'text-white'
                      : 'text-white/70'
                    : isActive
                      ? 'text-teal dark:text-sand'
                      : 'text-teal/70 dark:text-sand/70'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`pointer-events-none absolute -bottom-1.5 left-0 h-0.5 w-full origin-left bg-gold transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className={`flex items-center gap-3 ${NAV_LIFT}`}>
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
              className={({ isActive }) =>
                `py-3 text-sm font-semibold tracking-[0.12em] uppercase transition-colors duration-300 hover:text-gold border-b border-teal/5 dark:border-white/5 ${
                  isActive ? 'text-teal dark:text-sand' : 'text-teal/70 dark:text-sand/70'
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative inline-block">
                  {link.name}
                  <span
                    className={`pointer-events-none absolute -bottom-1.5 left-0 h-0.5 w-full origin-left bg-gold transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </span>
              )}
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
