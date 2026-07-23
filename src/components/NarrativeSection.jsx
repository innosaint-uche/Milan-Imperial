import Reveal from './Reveal';

// Themed narrative band with a lead heading, body paragraphs, and a row of
// supporting pillar cards. Used for the division-specific stewardship / safety
// sections (e.g. agro "Agriculture That Builds Tomorrow", contracting
// "Every Worker Goes Home Safe").
const NarrativeSection = ({ data, className = 'bg-ink text-sand' }) => {
  if (!data) return null;
  const dark = className.includes('bg-ink');

  return (
    <section className={`section ${className}`}>
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <span className="overline mb-4">{data.overline}</span>
          <h2 className={`display-lg mt-6 mb-8 ${dark ? 'text-white' : ''}`}>{data.title}</h2>
          <div className={`space-y-5 leading-relaxed ${dark ? 'text-sand/75' : 'text-teal/85 dark:text-sand/70'}`}>
            {data.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {data.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 4) * 0.08}>
              <article
                className={`h-full p-6 rounded-sm border transition-colors ${
                  dark
                    ? 'bg-white/5 border-white/10 hover:border-gold/40'
                    : 'bg-white dark:bg-white/5 border-teal/10 dark:border-white/10 hover:border-gold/40'
                }`}
              >
                <div className="w-10 h-px bg-gold mb-4" />
                <h3 className={`font-display text-lg mb-2 ${dark ? 'text-white' : ''}`}>{pillar.title}</h3>
                <p className={`text-sm leading-relaxed ${dark ? 'text-sand/65' : 'text-teal/80 dark:text-sand/65'}`}>
                  {pillar.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;
