/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./app/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'hbk-teal': '#1F9E9E',
        'hbk-coral': '#F26D5B',
        'hbk-oat': '#F4EEE6',
        'hbk-sage': '#8DAA91',
        'hbk-slate': '#2F3A3D',
        'hbk-ink': '#0F1416'
      },
      borderRadius: {
        soft: '12px'
      },
      boxShadow: {
        card: '0 2px 20px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: []
};