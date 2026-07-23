import { Quote } from 'lucide-react';
import { testimonials } from '../../data/site';
import Reveal from '../Reveal';

// Split the flat testimonial list into three vertical columns.
const columns = [[], [], []];
testimonials.forEach((t, i) => columns[i % 3].push(t));

// Alternating scroll directions + slightly different speeds so columns never
// line up. Column 1 up, column 2 down, column 3 up.
const columnConfig = [
  { anim: 'animate-marquee-up', duration: '46s' },
  { anim: 'animate-marquee-down', duration: '38s' },
  { anim: 'animate-marquee-up', duration: '52s' },
];

const initials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

const Card = ({ t }) => (
  <article className="card p-7 mb-6 hover:border-gold/40 hover:shadow-lg transition-all duration-300">
    <Quote className="text-gold/40 mb-4" size={28} />
    <p className="text-sm md:text-[15px] text-teal/85 dark:text-sand/75 leading-relaxed mb-6">
      &ldquo;{t.quote}&rdquo;
    </p>
    <div className="flex items-center gap-3 pt-5 border-t border-teal/10 dark:border-white/10">
      <span className="grid place-items-center w-11 h-11 rounded-full bg-gold/15 text-gold font-display font-semibold text-sm shrink-0">
        {initials(t.name)}
      </span>
      <div>
        <p className="font-semibold text-teal dark:text-sand text-sm">{t.name}</p>
        <p className="text-xs text-teal/60 dark:text-sand/55">
          {t.role} · {t.org}
        </p>
      </div>
    </div>
  </article>
);

// Each column duplicates its cards once; the keyframes translate by -50% so the
// loop is seamless. The `group` wrapper lives on the column container (see below),
// so hovering any card pauses this animated track for readability.
const Column = ({ items, config }) => (
  <div
    className={`flex flex-col ${config.anim} group-hover:[animation-play-state:paused]`}
    style={{ '--marquee-duration': config.duration }}
  >
    {[...items, ...items].map((t, i) => (
      <Card key={i} t={t} />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="section bg-sand-2 dark:bg-white/[0.03] overflow-hidden">
    <div className="container-x">
      <Reveal className="text-center max-w-2xl mx-auto mb-16">
        <span className="overline mb-4">Testimonials</span>
        <h2 className="display-lg mt-6">
          What Our Clients &amp; <span className="italic text-gold">Partners Say</span>
        </h2>
        <p className="lead mt-5">
          Hear from the farmers, businesses, and partners we work with across West Africa.
        </p>
      </Reveal>
    </div>

    {/* Marquee wall: fixed height with fade masks top & bottom */}
    <div className="relative h-[560px] md:h-[620px]">
      <div className="container-x h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full items-start">
          {columns.map((items, i) => (
            <div
              key={i}
              className={`group h-full overflow-hidden ${i === 2 ? 'hidden lg:block' : ''} ${
                i === 1 ? 'hidden md:block' : ''
              }`}
            >
              <Column items={items} config={columnConfig[i]} />
            </div>
          ))}
        </div>
      </div>

      {/* Top / bottom gradient fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sand-2 dark:from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-sand-2 dark:from-ink to-transparent" />
    </div>
  </section>
);

export default Testimonials;
