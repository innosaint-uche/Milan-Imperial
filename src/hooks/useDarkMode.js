import { useEffect, useState } from 'react';

// Toggles the `dark` class on <html> and persists the choice.
export default function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('mi-theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
    localStorage.setItem('mi-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return [dark, () => setDark((d) => !d)];
}
