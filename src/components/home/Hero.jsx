import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { heroSlides, company } from '../../data/site';

const AUTOPLAY = 6000;

const Hero = () => {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  const go = useCallback((i) => setIndex((i + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    const t = setTimeout(() => go(index + 1), AUTOPLAY);
    return () => clearTimeout(t);
  }, [index, go]);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink">
      {/* Background image crossfade */}
      <AnimatePresence>
        <motion.div
          key={slide.key}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover animate-ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container-x relative z-10 pt-28 pb-24 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.key}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="overline text-gold mb-6">{slide.overline}</span>
            <h1 className="display-xl text-white mt-6 mb-6">{slide.title}</h1>
            <p className="text-lg md:text-xl tracking-[0.2em] uppercase text-white/80 font-sans">
              {slide.subtitle}
            </p>
            <p className="mt-6 text-leaf font-semibold tracking-[0.25em] uppercase text-sm">
              {company.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link to={slide.to} className="btn btn-gold">Explore Division</Link>
              <Link to="/about" className="btn border-white/50 text-white hover:bg-white hover:text-teal">
                Our Story
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container-x flex items-end justify-between">
          <div className="flex gap-3">
            {heroSlides.map((s, i) => (
              <button
                key={s.key}
                onClick={() => go(i)}
                aria-label={`Show ${s.overline}`}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === index ? 'w-10 bg-gold' : 'w-6 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          <div className="hidden sm:block text-right text-white/60 text-xs tracking-[0.2em] uppercase">
            <p className="text-gold">Est. October 10, 2019</p>
            <p>{company.area}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
