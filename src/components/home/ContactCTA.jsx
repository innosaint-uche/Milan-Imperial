import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import { company, navLinks } from '../../data/site';
import Reveal from '../Reveal';
import EmailLink from '../EmailLink';

const ContactCTA = () => (
  <section id="contact" className="section bg-sand-2 dark:bg-white/[0.03]">
    <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
      <Reveal>
        <span className="overline mb-4">Get in Touch</span>
        <h2 className="display-lg mt-6 mb-8">
          Begin Your Partnership <span className="italic text-gold">With Us</span>
        </h2>

        <div className="mb-8">
          <h3 className="font-display text-2xl mb-1">{company.name}</h3>
          <p className="text-sm text-teal/80 dark:text-sand/60">
            Incorporated on {company.founded} · Serving clients across {company.area} with excellence,
            integrity, and innovation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="btn btn-gold">Start a Conversation</Link>
          <EmailLink className="btn btn-outline">Email Us</EmailLink>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="card p-8 md:p-10 space-y-6">
          <div className="flex gap-4">
            <MapPin className="text-gold shrink-0" size={20} />
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-teal/50 dark:text-sand/50 mb-1">Location</p>
              <p className="text-teal dark:text-sand">{company.location}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Mail className="text-gold shrink-0" size={20} />
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-teal/50 dark:text-sand/50 mb-1">Email</p>
              <EmailLink className="text-teal dark:text-sand hover:text-gold break-all">
                {company.email}
              </EmailLink>
            </div>
          </div>
          {/* Rendered only when a real number is set — an unanswered placeholder
              is worse than no phone row at all. */}
          {company.phone && (
            <div className="flex gap-4">
              <Phone className="text-gold shrink-0" size={20} />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-teal/50 dark:text-sand/50 mb-1">Phone</p>
                <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} className="text-teal dark:text-sand hover:text-gold">
                  {company.phone}
                </a>
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-teal/10 dark:border-white/10">
            <p className="text-xs tracking-[0.2em] uppercase text-teal/50 dark:text-sand/50 mb-3">Divisions</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {navLinks.filter((l) => l.href !== '/about').map((l) => (
                <Link key={l.href} to={l.href} className="text-sm text-teal/85 dark:text-sand/70 hover:text-gold">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ContactCTA;
