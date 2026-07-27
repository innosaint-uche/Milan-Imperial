import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { investorPaths } from '../data/site';
import Reveal from './Reveal';

// The three entry routes for investors and landowners, written as numbered
// step lists so the mechanics are legible before anyone makes contact.
const InvestorPaths = ({ className = 'bg-sand dark:bg-ink' }) => {
  const { overline, title, intro, paths, cta } = investorPaths;

  return (
    <section id="invest" className={`section ${className}`}>
      <div className="container-x">
        <Reveal className="max-w-2xl mb-14">
          <span className="overline mb-4">{overline}</span>
          <h2 className="display-lg mt-6 mb-6">{title}</h2>
          <p className="lead">{intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {paths.map((p, i) => (
            <Reveal key={p.num} delay={(i % 3) * 0.1}>
              <article className="card h-full p-8 flex flex-col border-t-2 border-t-gold hover:shadow-xl hover:border-gold/50">
                <span className="font-display text-4xl text-gold/40">{p.num}</span>
                <h3 className="font-display text-2xl mt-3 mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm italic text-gold mb-6">{p.lead}</p>

                <ul className="space-y-3 mb-6">
                  {p.steps.map((s) => (
                    <li key={s} className="flex gap-3">
                      <Check className="text-leaf shrink-0 mt-1" size={15} />
                      <span className="text-sm text-teal/85 dark:text-sand/70 leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto pt-5 border-t border-teal/10 dark:border-white/10 text-sm text-teal/70 dark:text-sand/60 leading-relaxed">
                  {p.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 text-center max-w-xl mx-auto">
          <p className="text-teal/85 dark:text-sand/70 mb-7">{cta.text}</p>
          <Link to="/contact" className="btn btn-gold">
            {cta.label} <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default InvestorPaths;
