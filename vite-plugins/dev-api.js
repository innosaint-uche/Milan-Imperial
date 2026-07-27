import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadEnv } from 'vite';

// `npm run dev` runs plain Vite, which knows nothing about the serverless
// functions in /api — so POST /api/contact 404s and the contact form fails with
// a generic error that looks like a bug in the form. This plugin mounts those
// handlers on the dev server so local development exercises the real code path.
//
// Production is unaffected: Vercel runs /api itself and this plugin is
// `apply: 'serve'` only.

// Vite's dev middleware does not parse request bodies; Vercel's runtime does.
const readBody = (req) =>
  new Promise((resolve) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      if (!raw) return resolve(undefined);
      try {
        resolve(JSON.parse(raw));
      } catch {
        resolve(raw);
      }
    });
    req.on('error', () => resolve(undefined));
  });

// Minimal stand-in for Vercel's `res.status().json()` helpers over a plain
// Node ServerResponse.
const withVercelHelpers = (res) => {
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (payload) => {
    if (!res.headersSent) res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(payload));
    return res;
  };
  res.send = (payload) => {
    res.end(typeof payload === 'string' ? payload : JSON.stringify(payload));
    return res;
  };
  return res;
};

export default function devApi({ dir = 'api' } = {}) {
  return {
    name: 'milan-dev-api',
    apply: 'serve',

    configResolved(config) {
      // Vercel injects environment variables for us in production. Locally the
      // handlers read process.env directly, so load .env into it ourselves.
      const env = loadEnv(config.mode, config.root, '');
      const reserved = new Set(['NODE_ENV', 'BASE_URL', 'MODE', 'DEV', 'PROD', 'SSR']);
      for (const [key, value] of Object.entries(env)) {
        if (!reserved.has(key)) process.env[key] = value;
      }
    },

    configureServer(server) {
      const root = server.config.root;

      server.middlewares.use(async (req, res, next) => {
        if (!req.url || !req.url.startsWith('/api/')) return next();

        const route = req.url.split('?')[0].slice('/api/'.length).replace(/\/+$/, '');
        // Refuse anything that could climb out of the api directory.
        if (!route || route.includes('..') || path.isAbsolute(route)) return next();

        const file = path.join(root, dir, `${route}.js`);
        if (!file.startsWith(path.join(root, dir)) || !fs.existsSync(file)) return next();

        try {
          // Cache-bust so edits to a handler take effect without restarting.
          const mod = await import(`${pathToFileURL(file).href}?t=${Date.now()}`);
          const handler = mod.default;
          if (typeof handler !== 'function') return next();

          if (req.method && !['GET', 'HEAD'].includes(req.method)) {
            req.body = await readBody(req);
          }
          req.query = Object.fromEntries(new URL(req.url, 'http://localhost').searchParams);

          await handler(req, withVercelHelpers(res));
        } catch (err) {
          server.config.logger.error(
            `[dev-api] /api/${route} threw:\n${err?.stack || err}`,
            { timestamp: true }
          );
          if (!res.writableEnded) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({ error: 'The local API handler threw an error — check the dev server terminal.' })
            );
          }
        }
      });

      server.config.logger.info(`  ➜  Dev API:  serving /api/* from ./${dir}`, { timestamp: false });
    },
  };
}
