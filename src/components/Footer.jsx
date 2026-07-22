import { Link } from 'react-router-dom';
import { footer, LOGO, divisions } from '../data/site';

const Footer = () => {
  const keywords = divisions.flatMap((d) => d.keywords);

  return (
    <footer className="bg-ink text-sand/80">
      <div className="container-x section">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div>
            <img src={LOGO} alt="Milan Imperial Limited" className="h-20 w-auto object-contain brightness-0 invert mb-6" />
            <p className="text-sm leading-relaxed max-w-sm mb-6">{footer.tagline}</p>
            <blockquote className="border-l-2 border-gold/60 pl-4 text-sm italic font-display text-sand/70 max-w-sm">
              {footer.quote}
            </blockquote>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-6">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Keywords */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sand/40 mb-4">
            Service Keywords &amp; Coverage Areas
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {keywords.map((k) => (
              <span key={k} className="text-xs text-sand/40">
                {k}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-sand/50">
            © {new Date().getFullYear()} Milan Imperial Limited. All rights reserved.
          </p>
          <p className="text-xs tracking-[0.2em] uppercase text-sand/50">
            Creating Values · Integrity · Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
