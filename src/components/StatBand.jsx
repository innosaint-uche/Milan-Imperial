import { useEffect, useRef, useState } from 'react';

// Parse "35,000+" -> { num: 35000, suffix: "+", grouped: true }; a plain year like
// "2019" keeps grouped:false so it never renders as "2,019". Non-numeric values
// like "ISO 9001" fall through and render verbatim.
const parse = (v) => {
  const match = String(v).match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { prefix: '', num: null, suffix: v, grouped: false };
  return {
    prefix: match[1],
    num: parseInt(match[2].replace(/,/g, ''), 10),
    suffix: match[3],
    grouped: match[2].includes(','),
  };
};

const format = (n, grouped) => (grouped ? n.toLocaleString('en-US') : String(n));

const Counter = ({ value }) => {
  const { prefix, num, suffix, grouped } = parse(value);
  const [display, setDisplay] = useState(num === null ? value : '0');
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    if (num === null) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(format(Math.round(num * eased), grouped));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [num, grouped]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

// Count-up statistics band. Shared by the Home page and division pages.
const StatBand = ({
  stats,
  className = 'bg-sand-2 dark:bg-white/5 border-y border-teal/10 dark:border-white/10',
}) => (
  <section className={className}>
    <div className="container-x py-14">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="display-md text-gold">
              <Counter value={s.value} />
            </div>
            <p className="mt-3 text-xs md:text-sm tracking-[0.15em] uppercase text-teal/80 dark:text-sand/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatBand;
