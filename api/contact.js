// Vercel serverless function — receives the /contact form and relays it to the
// Milan Imperial inbox via Resend. The sending domain, sender and destination are
// all environment-driven so they can be changed without a code deploy.
//
// Required env vars: RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL
//
// None of these have defaults on purpose. The sender must sit on a domain verified
// in Resend, and while sending from the shared `onboarding@resend.dev` address
// Resend only delivers to the account owner's own email — so a wrong-but-plausible
// default here surfaces as an opaque 403 at send time rather than an obvious
// misconfiguration. See README for the current values.

const FROM = process.env.CONTACT_FROM_EMAIL;
const TO = process.env.CONTACT_TO_EMAIL;

const LIMITS = { name: 120, email: 200, company: 160, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Strip CR/LF so a submitted name can never inject extra mail headers.
const oneLine = (v) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim();

const escapeHtml = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const missing = [
    !process.env.RESEND_API_KEY && 'RESEND_API_KEY',
    !FROM && 'CONTACT_FROM_EMAIL',
    !TO && 'CONTACT_TO_EMAIL',
  ].filter(Boolean);

  if (missing.length) {
    console.error('[contact] Missing environment variables:', missing.join(', '));
    return res.status(500).json({ error: 'Email is not configured on the server.' });
  }

  // Vercel parses JSON bodies for us, but be tolerant of a raw string.
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Invalid request body.' });
    }
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Invalid request body.' });
  }

  // Honeypot: real visitors never see this field, bots fill everything.
  if (oneLine(body.website)) return res.status(200).json({ ok: true });

  const name = oneLine(body.name);
  const email = oneLine(body.email);
  const company = oneLine(body.company);
  const message = String(body.message ?? '').trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide your name, email and a message.' });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    company.length > LIMITS.company ||
    message.length > LIMITS.message
  ) {
    return res.status(400).json({ error: 'That submission is too long. Please shorten it.' });
  }

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Company', company || '—'],
  ];

  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    message,
    '',
    '— Sent from the Milan Imperial website contact form',
  ].join('\n');

  const html = `
    <div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;color:#0f363e;line-height:1.6">
      <h2 style="font-size:17px;margin:0 0 16px">New enquiry from the website</h2>
      <table cellpadding="0" cellspacing="0" style="margin-bottom:20px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:2px 16px 2px 0;color:#3390a1">${k}</td><td>${escapeHtml(v)}</td></tr>`
          )
          .join('')}
      </table>
      <div style="white-space:pre-wrap;border-left:3px solid #c5a059;padding-left:14px">${escapeHtml(
        message
      )}</div>
      <p style="margin-top:24px;font-size:12px;color:#3390a1">
        Sent from the Milan Imperial website contact form. Reply directly to reach ${escapeHtml(name)}.
      </p>
    </div>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Website enquiry from ${name}${company ? ` (${company})` : ''}`,
        text,
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error('[contact] Resend rejected the request', response.status, detail);
      return res
        .status(502)
        .json({ error: 'We could not send your message right now. Please email us directly.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] Unexpected failure', err);
    return res
      .status(500)
      .json({ error: 'We could not send your message right now. Please email us directly.' });
  }
}
