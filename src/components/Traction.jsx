import { traction } from '../data/site';
import Reveal from './Reveal';

// Evidence grid: completed work only, no forward-looking claims. Sits above the
// targets section so the track record is read before the commitments.
const Traction = ({ className = 'bg-sand-2 dark:bg-white/[0.03]' }) => (
  <section className={`section ${className}`}>
    <div className="container-x">
      <Reveal className="max-w-2xl mb-14">
        <span className="overline mb-4">{traction.overline}</span>
        <h2 className="display-lg mt-6 mb-6">{traction.title}</h2>
        <p className="text-teal/85 dark:text-sand/70 leading-relaxed">{traction.intro}</p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {traction.items.map((item, i) => (
          <Reveal key={item.num} delay={(i % 3) * 0.08}>
            <article className="card h-full p-8 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl">
              <span className="font-display text-4xl text-gold/40">{item.num}</span>
              <p className="mt-4 font-display text-3xl text-gold leading-none">{item.stat}</p>
              <h3 className="font-display text-xl mt-4 mb-3">{item.title}</h3>
              <p className="text-sm text-teal/85 dark:text-sand/70 leading-relaxed">{item.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Traction;
