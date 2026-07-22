import { story, stats } from '../data/site';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CoreValues from '../components/home/CoreValues';
import OKRs from '../components/home/OKRs';

const About = () => (
  <>
    <PageHero
      overline="About Us"
      title={story.heading}
      image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80&auto=format&fit=crop"
    />

    {/* Narrative */}
    <section className="section bg-sand dark:bg-ink">
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <Reveal>
          <span className="overline mb-4">Our Story</span>
          <h2 className="display-lg mt-6 mb-8">
            Built on <span className="italic text-gold">Integrity</span> Since 2019
          </h2>
          <div className="space-y-5 text-teal/85 dark:text-sand/70 leading-relaxed">
            {story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <img
            src={story.images[0]}
            alt="Milan Imperial corporate operations"
            className="w-full h-72 object-cover rounded-sm shadow-xl"
          />
          <div id="vision" className="card p-8 border-l-2 border-l-gold">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">Our Vision</h3>
            <p className="text-teal/80 dark:text-sand/80">{story.vision}</p>
          </div>
          <div className="card p-8 border-l-2 border-l-leaf">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-leaf mb-3">Our Mission</h3>
            <p className="text-teal/80 dark:text-sand/80">{story.mission}</p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Stats band */}
    <section className="bg-sand-2 dark:bg-white/5 border-y border-teal/10 dark:border-white/10">
      <div className="container-x py-14 grid grid-cols-2 lg:grid-cols-4 gap-y-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="display-md text-gold">{s.value}</div>
            <p className="mt-3 text-xs md:text-sm tracking-[0.15em] uppercase text-teal/80 dark:text-sand/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>

    <CoreValues />
    <OKRs />
  </>
);

export default About;
