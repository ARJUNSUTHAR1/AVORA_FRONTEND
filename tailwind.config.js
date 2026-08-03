/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aw: {
          navy: '#0D1B2A',
          mid: '#334155',
          slate: '#64748B',
          light: '#E2E8F0',
          tan: '#B8A996',
          'tan-light': '#CFC0B0',
          cream: '#F8F7F4',
        },
        avora: {
          950: '#09121C',
          900: '#0D1B2A',
          800: '#162638',
          navy: '#0D1B2A',
          'navy-light': '#334155',
          gold: '#B8A996',
          'gold-light': '#CFC0B0',
          'gold-pale': '#F0EBE4',
          cream: '#F8F7F4',
          'cream-dark': '#E2E8F0',
          muted: '#64748B',
          'muted-light': '#94A3B8',
        },
      },
      fontFamily: {
        display: ['"Montserrat"', 'Arial', 'sans-serif'],
        sans: ['"Montserrat"', 'Arial', 'sans-serif'],
        body: ['"Montserrat"', 'Arial', 'sans-serif'],
      },
      animation: {
        'marquee-left': 'marquee-left 35s linear infinite',
        'marquee-right': 'marquee-right 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
