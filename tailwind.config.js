/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      rotate : {
        '270': '270deg',
        '360': '360deg',
      },
      '.flip-horizontal': {
        transform: 'scaleX(-1)',
      },
      fontFamily: {
        'gothic': ['Gothic A1', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        // 'abeezee': ['ABeeZee', 'sans-serif'], // hero section (huruf a)
        'spaceMono': ['Space Mono', 'sans-serif'], // hero section (huruf a)
        'silkscreen': ['Silkscreen', 'serif'], // hero section (tanda titik / '.')
      },
      colors : {
        'primary' : '#374151',
        'accent' : '#95c681',
        'accentHover' : '#86b274',
        'dark' : '#0f172a'
      },
    },
  },
  plugins: [],
}