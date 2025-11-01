/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#4DA3FF',
        accent: '#10E7C1',
        bg: '#070B17',
        ink: '#FFFFFF',
        muted: '#7A85A0',
        line: '#1A223C'
      },
      borderRadius: { xl: '16px', '2xl': '24px' }
    }
  },
  plugins: []
};
