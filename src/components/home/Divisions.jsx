import { Link } from 'react-router-dom';
import { divisions } from '../../data/site';
import Reveal from '../Reveal';

const DivisionRow = ({ d, flip }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
    {/* Image */}
    <Reveal className={flip ? 'lg:order-2' : ''}>
      <div className="relative">
        <img src={d.image} alt={d.name} className="w-full aspect-[4/3] object-cover rounded-sm shadow-2xl" />
        <span className="absolute top-5 left-5 font-display text-white/90 text-lg tracking-[0.3em]">
          DIVISION {d.num}
        </span>
        <div className="absolute inset-0 rounded-sm ring-1 ring-black/10" />
      </div>
    </Reveal>

    {/* Content */}
    <Reveal delay={0.1} className={flip ? 'lg:order-1' : ''}>
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3">Division {d.num}</p>
      <h3 className="display-md mb-4">{d.name}</h3>
      <p className="font-display italic text-xl text-teal-muted dark:text-leaf mb-5">“{d.quote}”</p>
      <p className="text-teal/85 dark:text-sand/70 leading-relaxed mb-6">{d.description}</p>

      {/* Services */}
      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
        {d.services.map((s) => (
          <div key={s.num} className="flex gap-3">
            <span className="font-display text-gold text-sm">{s.num}</span>
            <div>
              <p className="text-sm font-semibold text-teal dark:text-sand">{s.title}</p>
              <p className="text-xs text-teal/80 dark:text-sand/60">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Keywords */}
      <div className="flex flex-wrap gap-2 mb-8">
        {d.keywords.map((k) => (
          <span
            key={k}
            className="text-[10px] tracking-[0.1em] uppercase px-3 py-1 rounded-full border border-teal/25 dark:border-white/15 bg-teal/5 dark:bg-transparent text-teal/80 dark:text-sand/60"
          >
            {k}
          </span>
        ))}
      </div>

      <Link to={`/${d.slug}`} className="link-arrow">
        View Full Details →
      </Link>
    </Reveal>
  </div>
);

const Divisions = () => (
  <section id="divisions" className="section bg-sand-2 dark:bg-white/[0.03]">
    <div className="container-x">
      <Reveal className="text-center max-w-2xl mx-auto mb-16">
        <span className="overline mb-4">Our Divisions</span>
        <h2 className="display-lg mt-6 mb-5">
          Four Pillars of <span className="italic text-gold">Excellence</span>
        </h2>
        <p className="lead mx-auto">
          Milan Imperial operates across four dynamic business divisions, each delivering world-class services
          across West Africa.
        </p>
      </Reveal>

      <div className="space-y-20 md:space-y-28">
        {divisions.map((d, i) => (
          <DivisionRow key={d.slug} d={d} flip={i % 2 === 1} />
        ))}
      </div>
    </div>
  </section>
);

export default Divisions;
