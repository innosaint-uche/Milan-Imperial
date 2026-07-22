import { coreValues } from '../../data/site';
import Reveal from '../Reveal';

const CoreValues = () => (
  <section id="values" className="section bg-sand dark:bg-ink">
    <div className="container-x">
      <Reveal className="text-center max-w-2xl mx-auto mb-16">
        <span className="overline mb-4">Our Values</span>
        <h2 className="display-lg mt-6">
          The Principles That <span className="italic text-gold">Guide Us</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreValues.map((v, i) => (
          <Reveal key={v.num} delay={(i % 3) * 0.1}>
            <article className="card h-full p-8 hover:-translate-y-1 hover:shadow-xl hover:border-gold/40">
              <span className="font-display text-4xl text-gold/40">{v.num}</span>
              <h3 className="font-display text-2xl mt-3 mb-3">{v.title}</h3>
              <p className="text-sm text-teal/85 dark:text-sand/70 leading-relaxed mb-5">{v.desc}</p>
              <div className="border-t border-teal/10 dark:border-white/10 pt-4">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-leaf mb-2">In Practice</p>
                <p className="text-sm italic text-teal/80 dark:text-sand/60">{v.practice}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default CoreValues;
