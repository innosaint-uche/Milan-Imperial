/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Milan Imperial brand palette (from live site)
        teal: {
          DEFAULT: '#195764', // core teal
          muted: '#3390a1',   // muted teal
        },
        primary: {
          DEFAULT: '#195764',
          light: '#3390a1',
        },
        gold: '#c5a059',
        bronze: '#a37c58',
        leaf: '#8dc047',
        grey: '#9fa3a3',
        sand: {
          DEFAULT: '#fdfbf7',
          2: '#f0ebe1',
          3: '#e6dfd1',
        },
        ink: '#0f363e', // deep teal surface (footer / dark)
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        // Vertical marquee: content is duplicated once, so -50% is one full loop
        'marquee-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'marquee-down': {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s var(--tw-ease, ease-out) both',
        'ken-burns': 'ken-burns 12s ease-out both',
        'marquee-up': 'marquee-up var(--marquee-duration, 40s) linear infinite',
        'marquee-down': 'marquee-down var(--marquee-duration, 40s) linear infinite',
      },
    },
  },
  plugins: [],
}
