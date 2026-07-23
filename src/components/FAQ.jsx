import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Reveal from './Reveal';

// Accordion FAQ. Two-column on desktop: sticky heading left, question list right.
// One panel open at a time; click an open row to collapse it.
const FAQItem = ({ item, isOpen, onToggle, index }) => (
  <Reveal delay={(index % 5) * 0.06}>
    <div
      className={`card overflow-hidden transition-colors duration-300 ${
        isOpen ? 'border-gold/40 bg-white dark:bg-white/[0.06]' : 'hover:border-gold/30'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-5 text-left p-5 md:p-6"
      >
        <span className="font-display text-lg md:text-xl text-ink dark:text-sand leading-snug">
          {item.q}
        </span>
        <span
          className={`grid place-items-center w-9 h-9 rounded-lg shrink-0 transition-all duration-300 ${
            isOpen ? 'bg-gold text-white rotate-45' : 'bg-gold/15 text-gold'
          }`}
        >
          <Plus size={18} strokeWidth={2.5} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 md:px-6 pb-6 -mt-1 text-sm md:text-[15px] text-teal/85 dark:text-sand/70 leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </Reveal>
);

const FAQ = ({ items, brand = 'Milan Imperial', className = 'bg-sand dark:bg-ink' }) => {
  const [open, setOpen] = useState(0);

  if (!items?.length) return null;

  return (
    <section className={`section ${className}`}>
      <div className="container-x grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
        <Reveal className="lg:sticky lg:top-28">
          <span className="overline mb-4">FAQ</span>
          <h2 className="display-lg mt-6">
            Common Questions <span className="italic text-gold">About {brand}</span>
          </h2>
          <p className="text-teal/80 dark:text-sand/65 mt-5 leading-relaxed">
            Everything you need to know. Can&rsquo;t find an answer? Our team is a message away.
          </p>
        </Reveal>

        <div className="space-y-4">
          {items.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
