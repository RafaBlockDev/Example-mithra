/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ibm: {
          blue: '#0f62fe',
          'blue-hover': '#0353e9',
          'blue-light': '#d0e2ff',
          'blue-dark': '#0043ce',
          cyan: '#1192e8',
          teal: '#009d9a',
          green: '#198038',
          yellow: '#f1c21b',
          orange: '#ff832b',
          red: '#da1e28',
          purple: '#8a3ffc',
          magenta: '#ee5396',
          'gray-100': '#161616',
          'gray-90': '#262626',
          'gray-80': '#393939',
          'gray-70': '#525252',
          'gray-60': '#6f6f6f',
          'gray-50': '#8d8d8d',
          'gray-40': '#a8a8a8',
          'gray-30': '#c6c6c6',
          'gray-20': '#e0e0e0',
          'gray-10': '#f4f4f4',
          white: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-2': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading-1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
        'heading-2': ['2.25rem', { lineHeight: '1.25' }],
        'heading-3': ['1.75rem', { lineHeight: '1.3' }],
        'heading-4': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        'ibm-sm': '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)',
        'ibm-md': '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
        'ibm-lg': '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
        'ibm-xl': '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
      },
      animation: {
        'counter': 'counter 2s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
