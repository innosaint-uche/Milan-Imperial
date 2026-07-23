import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { divisions, faqs } from '../data/site';
import PageHero from './PageHero';
import Reveal from './Reveal';
import FAQ from './FAQ';
import StatBand from './StatBand';
import NarrativeSection from './NarrativeSection';
import ContactCTA from './home/ContactCTA';

// Full detail page for a single division, driven by its slug. Mirrors the
// section order of the live milanimperial.com division pages.
const DivisionPage = ({ slug }) => {
  const d = divisions.find((x) => x.slug === slug);

  if (!d) return null;

  return (
    <>
      <PageHero overline={`Division ${d.num}`} title={d.name} subtitle={d.quote} image={d.image} />

      {/* Metrics band (divisions that report headline figures) */}
      {d.metrics && <StatBand stats={d.metrics} />}

      {/* Overview + Why Choose */}
      <section className="section bg-sand dark:bg-ink">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <span className="overline mb-4">Overview</span>
            <h2 className="display-lg mt-6 mb-8">
              {d.overview.lead}
              <span className="italic text-gold">{d.overview.emphasis}</span>
            </h2>
            <div className="space-y-5 text-teal/85 dark:text-sand/70 leading-relaxed">
              {d.overview.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {d.projectTypes && (
              <div className="mt-8">
                <p className="text-xs tracking-[0.2em] uppercase text-teal/50 dark:text-sand/50 mb-3">Project Types</p>
                <div className="flex flex-wrap gap-2">
                  {d.projectTypes.map((t) => (
                    <span
                      key={t}
                      className="text-sm px-4 py-2 rounded-sm border border-teal/20 dark:border-white/15 bg-white dark:bg-white/5 text-teal dark:text-sand"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-8">
              {d.keywords.map((k) => (
                <span
                  key={k}
                  className="text-[11px] tracking-[0.08em] uppercase px-3 py-1.5 rounded-full border border-teal/25 dark:border-white/15 bg-teal/5 dark:bg-transparent text-teal/80 dark:text-sand/60"
                >
                  {k}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <div className="card p-8 border-t-2 border-t-gold">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="text-leaf shrink-0" size={22} />
                <h3 className="font-display text-xl leading-snug">{d.whyChoose.title}</h3>
              </div>
              <ul className="space-y-4">
                {d.whyChoose.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle2 className="text-leaf shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-teal/85 dark:text-sand/70 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="link-arrow mt-7">
                {d.whyChoose.ctaLabel} <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Value proposition pull-quote */}
      {d.valueProp && (
        <section className="bg-ink text-sand">
          <div className="container-x py-20 md:py-24 text-center max-w-4xl mx-auto">
            <Reveal>
              <p className="font-display italic text-2xl md:text-4xl leading-snug text-white">
                “{d.valueProp.quote}”
              </p>
              <p className="mt-8 text-xs tracking-[0.25em] uppercase text-gold">{d.valueProp.label}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Services */}
      <section className="section bg-sand-2 dark:bg-white/[0.03]">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-14">
            <span className="overline mb-4">{d.servicesHeading.overline}</span>
            <h2 className="display-lg mt-6">{d.servicesHeading.title}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.services.map((s, i) => (
              <Reveal key={s.num} delay={(i % 3) * 0.08}>
                <article className="card h-full p-8 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl">
                  <span className="font-display text-4xl text-gold/40">{s.num}</span>
                  <h3 className="font-display text-2xl mt-3 mb-4">{s.title}</h3>
                  <div className="space-y-3 text-sm text-teal/85 dark:text-sand/70 leading-relaxed">
                    {s.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Division narrative (stewardship / safety) */}
      {d.narrative && <NarrativeSection data={d.narrative} />}

      {/* FAQ */}
      <FAQ items={faqs[slug]} brand={`Our ${d.name.split(',')[0]}`} className="bg-sand dark:bg-ink" />

      {/* Division CTA */}
      <section className="bg-ink text-sand">
        <div className="container-x py-20 text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="overline mb-4 justify-center">{d.cta.overline}</span>
            <h2 className="display-md text-white mt-6 mb-4">{d.cta.title}</h2>
            <p className="text-sand/70 mb-8">{d.cta.text}</p>
            <Link to="/contact" className="btn btn-gold">
              {d.cta.buttonLabel} <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Get in touch */}
      <ContactCTA />
    </>
  );
};

export default DivisionPage;
