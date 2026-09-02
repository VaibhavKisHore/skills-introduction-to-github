/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#0B3D2E',
        emerald: '#167C5A',
        lightGreen: '#DFF4E8',
        gold: '#F4B942',
        offWhite: '#F8FAF9',
        darkText: '#16221C',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(11, 61, 46, 0.12)',
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-grad': 'linear-gradient(135deg, rgba(11,61,46,0.95) 0%, rgba(22,124,90,0.9) 60%, rgba(244,185,66,0.75) 100%)',
      },
    },
  },
  plugins: [],
}
