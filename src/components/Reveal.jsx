import { motion } from 'framer-motion';

// Fade-and-rise on scroll into view. Consistent motion across the site.
const Reveal = ({ children, delay = 0, y = 30, className = '', as = 'div' }) => {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </M>
  );
};

export default Reveal;
