import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c2410c',
        secondary: '#0369a1',
        ink: '#0b1026',
        background: '#f1f5f9',
        surface: '#f8fafc',
        'text-dark': '#1e293b',
      },
      fontFamily: {
        heading: ['var(--font-nunito)', 'sans-serif'],
        body: ['var(--font-quicksand)', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.5rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
