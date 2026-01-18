import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        lg: '1300px',
      },
      colors: {
        'ttymi-green': '#043e18',
        'ttymi-dark': '#023313',
      },
      backgroundImage: {
        'ttymi-gradient': 'radial-gradient(122.89% 58.71% at 50% 61.22%, #099538 0%, #043d17 100%)',
      },
      boxShadow: {
        ttymi: '0px -7px 27px 2px rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
