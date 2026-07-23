import { Link } from 'react-router-dom';
import { story } from '../../data/site';
import Reveal from '../Reveal';

const Story = () => {
  const heading = story.heading.split(story.emphasis);

  return (
    <section id="story" className="section bg-sand dark:bg-ink">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Copy */}
        <Reveal>
          <span className="overline mb-6">Our Story</span>
          <h2 className="display-lg mt-6 mb-8">
            {heading[0]}
            <span className="italic text-gold">{story.emphasis}</span>
            {heading[1]}
          </h2>
          <div className="space-y-5 text-teal/85 dark:text-sand/70 leading-relaxed">
            {story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <div className="border-l-2 border-gold pl-5">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-2">Our Vision</h3>
              <p className="text-sm text-teal/85 dark:text-sand/70">{story.vision}</p>
            </div>
            <div className="border-l-2 border-leaf pl-5">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-leaf mb-2">Our Mission</h3>
              <p className="text-sm text-teal/85 dark:text-sand/70">{story.mission}</p>
            </div>
          </div>

          <Link to="/about" className="link-arrow mt-10">
            Full Story &amp; Strategic Framework →
          </Link>
        </Reveal>

        {/* Image collage */}
        <Reveal delay={0.15} className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={story.images[0]}
              alt="Milan Imperial corporate operations"
              className="col-span-2 w-full h-64 md:h-80 object-cover rounded-sm shadow-xl"
            />
            <img src={story.images[1]} alt="Business meeting" className="w-full h-40 md:h-52 object-cover rounded-sm shadow-lg" />
            <img src={story.images[2]} alt="Operations" className="w-full h-40 md:h-52 object-cover rounded-sm shadow-lg" />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-gold text-white px-6 py-4 shadow-xl hidden md:block">
            <p className="font-display text-2xl leading-none">Founded</p>
            <p className="text-xs tracking-[0.2em] uppercase mt-1">Oct 10, 2019</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Story;
