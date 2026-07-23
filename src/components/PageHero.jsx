import { motion } from 'framer-motion';

// Compact inner-page hero with a background image and overlay.
const PageHero = ({ overline, title, subtitle, image }) => (
  <section className="relative flex items-end min-h-[60vh] md:min-h-[70vh] overflow-hidden bg-ink">
    <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />
    <div className="container-x relative z-10 pb-16 md:pb-20 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        {overline && <span className="overline text-gold mb-5">{overline}</span>}
        <h1 className="display-xl text-white mt-5">{title}</h1>
        {subtitle && (
          <p className="mt-5 font-display italic text-xl md:text-2xl text-leaf">“{subtitle}”</p>
        )}
      </motion.div>
    </div>
  </section>
);

export default PageHero;
