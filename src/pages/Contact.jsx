import { useState } from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { company } from '../data/site';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import EmailLink from '../components/EmailLink';

const Field = ({ label, ...props }) => (
  <label className="block">
    <span className="block text-xs tracking-[0.15em] uppercase text-teal/80 dark:text-sand/60 mb-2">{label}</span>
    <input
      {...props}
      className="w-full bg-transparent border border-teal/20 dark:border-white/20 rounded-sm px-4 py-3 text-teal dark:text-sand outline-none focus:border-gold transition-colors"
    />
  </label>
);

const EMPTY = { name: '', email: '', company: '', message: '', website: '' };

const Contact = () => {
  const [form, setForm] = useState(EMPTY);
  // 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      // A missing or misrouted endpoint answers with HTML, not JSON — parsing it
      // as JSON is what previously collapsed every failure into one vague message.
      const isJson = (res.headers.get('content-type') || '').includes('application/json');
      const data = isJson ? await res.json().catch(() => ({})) : {};

      if (!res.ok) {
        console.error('[contact] Request failed', res.status, data);
        throw new Error(
          data.error ||
            (res.status === 404
              ? 'The contact service could not be reached.'
              : `The contact service returned an error (${res.status}).`)
        );
      }

      setForm(EMPTY);
      setStatus('sent');
    } catch (err) {
      console.error('[contact]', err);
      setError(
        err instanceof TypeError
          ? 'We could not reach the contact service — check your connection.'
          : err.message || 'Something went wrong.'
      );
      setStatus('error');
    }
  };

  // `company.phone` is currently unset — drop any detail without a value rather
  // than rendering a labelled row with nothing under it.
  const details = [
    { icon: MapPin, label: 'Location', value: company.location },
    { icon: Mail, label: 'Email', value: company.email, email: true },
    { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${String(company.phone).replace(/[^\d+]/g, '')}` },
    { icon: Clock, label: 'Founded', value: company.founded },
  ].filter((d) => d.value);

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
                    {d.email ? (
                      <EmailLink className="text-teal dark:text-sand hover:text-gold break-all">
                        {d.value}
                      </EmailLink>
                    ) : d.href ? (
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
              {/* Honeypot — hidden from people, irresistible to bots. */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={form.website}
                onChange={set('website')}
                className="hidden"
              />

              <button type="submit" disabled={status === 'sending'} className="btn btn-gold w-full disabled:opacity-60 disabled:cursor-not-allowed">
                {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
              </button>

              <div aria-live="polite" className="min-h-[1.25rem]">
                {status === 'sent' && (
                  <p className="text-sm text-leaf text-center">
                    Thank you — your enquiry has been sent. We&rsquo;ll be in touch shortly.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-bronze dark:text-gold text-center">
                    {error}{' '}
                    <EmailLink
                      className="underline hover:text-gold"
                      subject="Enquiry for Milan Imperial Limited"
                      body={form.message}
                      copiedLabel="Copy this address"
                    >
                      Email us directly
                    </EmailLink>
                    .
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
