import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { divisions } from '../data/site';
import PageHero from './PageHero';
import Reveal from './Reveal';

// Full detail page for a single division, driven by its slug.
const DivisionPage = ({ slug }) => {
  const d = divisions.find((x) => x.slug === slug);
  const others = divisions.filter((x) => x.slug !== slug);

  if (!d) return null;

  return (
    <>
      <PageHero overline={`Division ${d.num}`} title={d.name} subtitle={d.quote} image={d.image} />

      {/* Overview */}
      <section className="section bg-sand dark:bg-ink">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14 items-start">
          <Reveal>
            <span className="overline mb-4">Overview</span>
            <p className="display-md mt-6 leading-snug text-teal dark:text-sand">{d.description}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-8">
              <p className="text-xs tracking-[0.2em] uppercase text-teal/50 dark:text-sand/50 mb-4">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {d.keywords.map((k) => (
                  <span
                    key={k}
                    className="text-[11px] tracking-[0.08em] uppercase px-3 py-1.5 rounded-full border border-teal/25 dark:border-white/15 bg-teal/5 dark:bg-transparent text-teal/80 dark:text-sand/60"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-sand-2 dark:bg-white/[0.03]">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-14">
            <span className="overline mb-4">What We Offer</span>
            <h2 className="display-lg mt-6">
              Services &amp; <span className="italic text-gold">Capabilities</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.services.map((s, i) => (
              <Reveal key={s.num} delay={(i % 3) * 0.08}>
                <article className="card h-full p-8 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl">
                  <span className="font-display text-4xl text-gold/40">{s.num}</span>
                  <h3 className="font-display text-2xl mt-3 mb-3">{s.title}</h3>
                  <p className="text-sm text-teal/85 dark:text-sand/70 leading-relaxed">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-sand">
        <div className="container-x py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="display-md text-white mb-3">Partner with our {d.name.split(',')[0]} team</h2>
            <p className="text-sand/70 max-w-xl">
              Tell us about your project and we will tailor a solution built on integrity, safety, and excellence.
            </p>
          </div>
          <Link to="/contact" className="btn btn-gold shrink-0">Get in Touch</Link>
        </div>
      </section>

      {/* Other divisions */}
      <section className="section bg-sand dark:bg-ink">
        <div className="container-x">
          <h2 className="font-display text-2xl mb-8">Explore Other Divisions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/${o.slug}`}
                className="group card overflow-hidden hover:border-gold/40 hover:shadow-xl transition-all"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={o.image} alt={o.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-ink/30" />
                </div>
                <div className="p-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">Division {o.num}</p>
                  <h3 className="font-display text-lg mb-3 leading-snug">{o.name}</h3>
                  <span className="link-arrow text-xs inline-flex items-center gap-1">
                    View <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DivisionPage;
