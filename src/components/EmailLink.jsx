import { useCallback, useEffect, useRef, useState } from 'react';
import { company } from '../data/site';

const DEFAULT_SUBJECT = 'Enquiry for Milan Imperial Limited';

// A mailto: link does nothing at all when the visitor has no mail client
// registered — the click is swallowed and the page just sits there, which reads
// as a broken link. This keeps mailto: as the primary action (correct wherever a
// handler exists, including every phone) and falls back to copying the address
// to the clipboard when nothing opens.
const EmailLink = ({
  children,
  subject = DEFAULT_SUBJECT,
  body,
  email = company.email,
  copiedLabel = 'Address copied',
  className = '',
  ...rest
}) => {
  const [copied, setCopied] = useState(false);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  const href = `mailto:${email}${query ? `?${query}` : ''}`;

  const handleClick = useCallback(() => {
    // If a mail client launched, the browser loses focus (desktop) or the page
    // is hidden (mobile). Still focused a moment later means nothing happened.
    const timer = setTimeout(async () => {
      if (document.hidden || !document.hasFocus()) return;
      try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        timers.current.push(setTimeout(() => setCopied(false), 4000));
      } catch {
        // Clipboard blocked (insecure origin or denied permission). The address
        // is still readable via the link's title attribute.
      }
    }, 700);
    timers.current.push(timer);
  }, [email]);

  return (
    <a href={href} onClick={handleClick} title={email} className={className} {...rest}>
      {copied ? `${copiedLabel} — ${email}` : children}
    </a>
  );
};

export default EmailLink;
