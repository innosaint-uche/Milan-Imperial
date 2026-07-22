import { okrs } from '../../data/site';
import { Check } from 'lucide-react';
import Reveal from '../Reveal';

const OKRs = () => (
  <section id="okrs" className="section bg-ink text-sand">
    <div className="container-x">
      <Reveal className="max-w-2xl mb-16">
        <span className="overline mb-4">Strategic Framework</span>
        <h2 className="display-lg text-white mt-6 mb-5">OKRs — Objectives &amp; Key Results</h2>
        <p className="text-sand/70">
          Adopted since our founding on October 10th, 2019, our objectives and key results keep every division
          aligned on focused, measurable growth.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {okrs.map((o, i) => (
          <Reveal key={o.num} delay={(i % 2) * 0.1}>
            <div className="border border-white/10 rounded-sm p-8 h-full bg-white/[0.02] hover:border-gold/40 transition-colors">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display text-3xl text-gold">{o.num}</span>
                <h3 className="font-display text-2xl text-white">{o.title}</h3>
              </div>
              <ul className="space-y-3">
                {o.results.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-sand/75">
                    <Check size={16} className="text-leaf shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default OKRs;
