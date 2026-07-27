# Milan Imperial Limited — Website

Multi-page marketing site for Milan Imperial Limited, built with React 18 + Vite.

## Commands

```bash
npm run dev      # Vite dev server with HMR — also serves /api/* (see below)
npm run build    # Production build to dist/
npm run preview  # Serve the production build locally
npm run lint     # ESLint over the whole project
```

## Contact form

The `/contact` form POSTs to `/api/contact`, a serverless function that relays the
enquiry to the company inbox via [Resend](https://resend.com).

### Environment variables

All three are required. There are no defaults on purpose — a wrong-but-plausible
fallback surfaces as an opaque 403 at send time rather than an obvious
misconfiguration.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from the Resend dashboard |
| `CONTACT_FROM_EMAIL` | Sender. **Must** sit on a domain verified in Resend |
| `CONTACT_TO_EMAIL` | Destination inbox for enquiries |

Set them in `.env` for local development (gitignored, see `.env.example`) **and** in
Vercel → Project → Settings → Environment Variables for production. The two are
independent — updating `.env` does nothing for the deployed site.

### Local development

`npm run dev` runs plain Vite, which has no serverless runtime of its own. The
`vite-plugins/dev-api.js` plugin mounts the handlers in `api/` onto the dev server
and loads `.env` into `process.env`, so the contact form exercises the real code
path locally. Handlers are re-imported per request, so edits apply without a
restart. The plugin is `apply: 'serve'` and has no effect on `vite build`.

### Sandbox limitation — read this before testing

Until a domain is verified, `CONTACT_FROM_EMAIL` has to use Resend's shared
`onboarding@resend.dev` address, and **Resend will only deliver to the email
address that owns the Resend account.** Sending anywhere else fails with:

```
403 validation_error — You can only send testing emails to your own email address
```

The request itself is fine; the API key and payload are valid. Only the recipient
is refused. To send to the real company inbox:

1. Add and verify `milanimperial.com` at [resend.com/domains](https://resend.com/domains) (DNS records).
2. Change `CONTACT_FROM_EMAIL` to an address on that domain, e.g.
   `"Milan Imperial <noreply@milanimperial.com>"`.
3. Update the value in **both** `.env` and Vercel, then redeploy.

`CONTACT_TO_EMAIL` can then be any address.

### Diagnosing failures

The function logs the underlying cause to the server console and returns a
user-safe message. Locally, watch the `npm run dev` terminal; on Vercel, check the
function logs. The browser console also logs the status and response body.
