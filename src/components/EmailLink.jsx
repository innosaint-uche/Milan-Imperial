import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, Copy, Mail } from 'lucide-react';
import { company } from '../data/site';

const DEFAULT_SUBJECT = 'Enquiry for Milan Imperial Limited';
const MENU_WIDTH = 248;

// Why this is not just an <a href="mailto:">:
//
// A mailto: link is handed to the operating system, which looks for a registered
// desktop mail client. Most Windows machines have none, so the click is silently
// discarded and the link appears broken. Being signed into Gmail in the browser
// makes no difference — webmail only receives mailto: if the user has explicitly
// registered it as a protocol handler in Chrome, which is off by default.
//
// So we offer the webmail compose URLs directly, and keep mailto: as one option
// for people who do have a desktop client.
const buildServices = (email, subject, body) => {
  const to = encodeURIComponent(email);
  const su = encodeURIComponent(subject || '');
  const bd = encodeURIComponent(body || '');
  return [
    { key: 'gmail', name: 'Gmail', url: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${bd}` },
    { key: 'outlook', name: 'Outlook', url: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}&body=${bd}` },
    { key: 'yahoo', name: 'Yahoo Mail', url: `https://compose.mail.yahoo.com/?to=${to}&subject=${su}&body=${bd}` },
  ];
};

const EmailLink = ({
  children,
  subject = DEFAULT_SUBJECT,
  body,
  email = company.email,
  className = '',
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const copyTimer = useRef(null);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  const mailtoHref = `mailto:${email}${query ? `?${query}` : ''}`;

  const place = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({
      top: Math.min(r.bottom + 8, window.innerHeight - 16),
      left: Math.max(12, Math.min(r.left, window.innerWidth - MENU_WIDTH - 12)),
    });
  }, []);

  useLayoutEffect(() => {
    if (open) place();
  }, [open, place]);

  useEffect(() => {
    if (!open) return undefined;
    const close = () => setOpen(false);
    const onKey = (e) => e.key === 'Escape' && close();
    const onPointer = (e) => {
      if (menuRef.current?.contains(e.target) || triggerRef.current?.contains(e.target)) return;
      close();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
      window.removeEventListener('scroll', close, true);
      window.removeEventListener('resize', close);
    };
  }, [open]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      copyTimer.current = setTimeout(() => {
        setCopied(false);
        setOpen(false);
      }, 1400);
    } catch {
      setOpen(false);
    }
  };

  const itemClass =
    'flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-teal dark:text-sand hover:bg-gold/10 hover:text-gold transition-colors';

  return (
    <>
      <a
        ref={triggerRef}
        href={mailtoHref}
        title={email}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={(e) => {
          e.preventDefault();
          setOpen((o) => !o);
        }}
        className={className}
        {...rest}
      >
        {children}
      </a>

      {open &&
        createPortal(
          <div
            ref={menuRef}
            role="menu"
            style={{ top: pos.top, left: pos.left, width: MENU_WIDTH }}
            className="popover-in fixed z-[60] rounded-sm border border-teal/15 dark:border-white/15 bg-white dark:bg-ink shadow-2xl py-2"
          >
            <p className="px-4 pb-2 text-[10px] font-semibold tracking-[0.18em] uppercase text-teal/45 dark:text-sand/40">
              Open in
            </p>

            {buildServices(email, subject, body).map((s) => (
              <button
                key={s.key}
                type="button"
                role="menuitem"
                className={itemClass}
                onClick={() => {
                  window.open(s.url, '_blank', 'noopener,noreferrer');
                  setOpen(false);
                }}
              >
                <Mail size={15} className="shrink-0 text-gold" />
                {s.name}
              </button>
            ))}

            <div className="my-2 border-t border-teal/10 dark:border-white/10" />

            <a href={mailtoHref} role="menuitem" className={itemClass} onClick={() => setOpen(false)}>
              <Mail size={15} className="shrink-0 text-gold" />
              Default mail app
            </a>

            <button type="button" role="menuitem" className={itemClass} onClick={copy}>
              {copied ? (
                <Check size={15} className="shrink-0 text-leaf" />
              ) : (
                <Copy size={15} className="shrink-0 text-gold" />
              )}
              {copied ? 'Address copied' : 'Copy address'}
            </button>

            <p className="px-4 pt-2 text-[11px] leading-snug text-teal/45 dark:text-sand/40 break-all">{email}</p>
          </div>,
          document.body
        )}
    </>
  );
};

export default EmailLink;
