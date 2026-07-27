import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Target } from 'lucide-react';
import { growthTargets } from '../data/site';
import Reveal from './Reveal';

// Two-column proof-then-promise band: what was set and delivered this year,
// beside what the company is committing to next.
const GrowthTargets = () => {
  const { overline, title, intro, deliveredLabel, nextLabel, delivered, next, footnote } = growthTargets;

  return (
    <section className="section bg-ink text-sand">
      <div className="container-x">
        <Reveal className="max-w-3xl mb-14">
          <span className="overline mb-4">{overline}</span>
          <h2 className="display-lg text-white mt-6 mb-6">{title}</h2>
          <p className="text-sand/75 leading-relaxed">{intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <Reveal>
            <div className="h-full p-8 md:p-10 rounded-sm bg-white/5 border border-leaf/30">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="text-leaf shrink-0" size={20} />
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-leaf">{deliveredLabel}</h3>
              </div>
              <ul className="space-y-7">
                {delivered.map((d) => (
                  <li key={d.target}>
                    <p className="text-sm text-sand/55 line-through decoration-sand/30">{d.target}</p>
                    <p className="mt-2 flex gap-3 font-display text-lg leading-snug text-white">
                      <CheckCircle2 className="text-leaf shrink-0 mt-1" size={16} />
                      {d.result}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full p-8 md:p-10 rounded-sm bg-white/5 border border-gold/30">
              <div className="flex items-center gap-3 mb-8">
                <Target className="text-gold shrink-0" size={20} />
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">{nextLabel}</h3>
              </div>
              <ul className="space-y-7">
                {next.map((n) => (
                  <li key={n.target}>
                    <p className="flex gap-3 font-display text-lg leading-snug text-white">
                      <Target className="text-gold shrink-0 mt-1" size={16} />
                      {n.target}
                    </p>
                    <p className="mt-2 pl-7 text-sm text-sand/65 leading-relaxed">{n.detail}</p>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="link-arrow mt-10">
                Grow With Us <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>

        <p className="mt-8 text-xs tracking-wide text-sand/40">{footnote}</p>
      </div>
    </section>
  );
};

export default GrowthTargets;
