import { useState } from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { company } from '../data/site';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const Field = ({ label, ...props }) => (
  <label className="block">
    <span className="block text-xs tracking-[0.15em] uppercase text-teal/80 dark:text-sand/60 mb-2">{label}</span>
    <input
      {...props}
      className="w-full bg-transparent border border-teal/20 dark:border-white/20 rounded-sm px-4 py-3 text-teal dark:text-sand outline-none focus:border-gold transition-colors"
    />
  </label>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name || 'website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    // Compose an email in the visitor's own mail client — no data leaves the browser otherwise.
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  const details = [
    { icon: MapPin, label: 'Location', value: company.location },
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: Phone, label: 'Phone', value: company.phone },
    { icon: Clock, label: 'Founded', value: company.founded },
  ];

  return (
    <>
      <PageHero
        overline="Get in Touch"
        title="Begin Your Partnership With Us"
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80&auto=format&fit=crop"
      />

      <section className="section bg-sand dark:bg-ink">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Details */}
          <Reveal>
            <span className="overline mb-4">Contact</span>
            <h2 className="display-md mt-6 mb-6">Let&rsquo;s build something enduring together.</h2>
            <p className="text-teal/85 dark:text-sand/70 mb-10 max-w-lg">
              Whether you are planning a project, exploring a partnership, or joining our team, our
              consultancy desk is ready to help. Reach out and we&rsquo;ll respond promptly.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {details.map((d) => (
                <div key={d.label} className="flex gap-4">
                  <d.icon className="text-gold shrink-0" size={20} />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-teal/50 dark:text-sand/50 mb-1">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="text-teal dark:text-sand hover:text-gold break-all">{d.value}</a>
                    ) : (
                      <p className="text-teal dark:text-sand">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={submit} className="card p-8 md:p-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" type="text" required value={form.name} onChange={set('name')} placeholder="Jane Doe" />
                <Field label="Email" type="email" required value={form.email} onChange={set('email')} placeholder="jane@company.com" />
              </div>
              <Field label="Company" type="text" value={form.company} onChange={set('company')} placeholder="Your organisation" />
              <label className="block">
                <span className="block text-xs tracking-[0.15em] uppercase text-teal/80 dark:text-sand/60 mb-2">Message</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell us about your project or enquiry…"
                  className="w-full bg-transparent border border-teal/20 dark:border-white/20 rounded-sm px-4 py-3 text-teal dark:text-sand outline-none focus:border-gold transition-colors resize-none"
                />
              </label>
              <button type="submit" className="btn btn-gold w-full">Send Enquiry</button>
              <p className="text-xs text-teal/50 dark:text-sand/50 text-center">
                This opens your email client — nothing is sent automatically.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
