/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Cal Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        sand: '#F9FAFB',
        ink: '#0F172A',
        terracotta: '#B45309',
      },
      boxShadow: {
        soft: '0 12px 40px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'heritage-grid':
          'radial-gradient(circle at 1px 1px, rgba(180, 83, 9, 0.08) 1px, transparent 0)',
        'hero-glow':
          'radial-gradient(circle at top, rgba(180, 83, 9, 0.12), transparent 55%)',
      },
    },
  },
  plugins: [],
};
