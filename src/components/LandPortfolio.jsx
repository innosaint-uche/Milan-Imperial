import { landPortfolio } from '../data/site';
import Reveal from './Reveal';

// State-by-state breakdown of farmland held, with the year's acquisition
// called out. Shared by the About page and the Agro division page.
const LandPortfolio = ({ className = 'bg-sand dark:bg-ink' }) => {
  const { overline, title, intro, columns, rows, total, highlight, footnote } = landPortfolio;

  return (
    <section className={`section ${className}`}>
      <div className="container-x grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
        <Reveal>
          <span className="overline mb-4">{overline}</span>
          <h2 className="display-lg mt-6 mb-6">{title}</h2>
          <p className="text-teal/85 dark:text-sand/70 leading-relaxed mb-10">{intro}</p>

          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <table className="w-full min-w-[30rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-teal/20 dark:border-white/15">
                  {columns.map((c, i) => (
                    <th
                      key={c}
                      className={`py-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-teal/60 dark:text-sand/50 ${
                        i > 0 && i < 3 ? 'text-right' : ''
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.region} className="border-b border-teal/10 dark:border-white/10">
                    <td className="py-4 font-display text-lg text-teal dark:text-sand">{r.region}</td>
                    <td className="py-4 text-right tabular-nums text-teal/85 dark:text-sand/75">{r.plots}</td>
                    <td className="py-4 text-right tabular-nums text-teal/85 dark:text-sand/75">{r.hectares}</td>
                    <td className="py-4 pl-6 text-xs tracking-wide text-teal/55 dark:text-sand/50">{r.status}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-t-gold">
                  <td className="py-5 font-display text-lg text-gold">{total.region}</td>
                  <td className="py-5 text-right tabular-nums font-semibold text-gold">{total.plots}</td>
                  <td className="py-5 text-right tabular-nums font-semibold text-gold">{total.hectares}</td>
                  <td className="py-5 pl-6 text-xs tracking-wide text-teal/55 dark:text-sand/50">{total.status}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-teal/50 dark:text-sand/40">{footnote}</p>
        </Reveal>

        <Reveal delay={0.1} className="lg:sticky lg:top-28">
          <div className="card p-10 border-t-2 border-t-gold text-center">
            <div className="font-display text-7xl md:text-8xl text-gold leading-none">{highlight.value}</div>
            <p className="mt-2 text-sm tracking-[0.2em] uppercase text-teal/60 dark:text-sand/50">{highlight.unit}</p>
            <div className="w-12 h-px bg-gold mx-auto my-6" />
            <p className="font-display text-xl leading-snug text-teal dark:text-sand">{highlight.label}</p>
            <p className="mt-4 text-sm leading-relaxed text-teal/75 dark:text-sand/65">{highlight.sub}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LandPortfolio;
