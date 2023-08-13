module.exports = {
  content: ['../../packages/ui/**/*.{ts,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#108ee9',
        'primary-hover': '#49a9ee',
        'site-text-color': 'rgba(0,0,0,0.65)',
        'site-text-color-secondary': '#697b8c',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(10%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-down': {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(10%)', opacity: 0 },
        },
        'banner-title-line': {
          '0%': { transform: 'translateX(-64px)' },
          '100%': { transform: 'translateX(544px)' },
        },
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
