/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bodybg: '#07373F',
        mainbg: '#02191D',
        sectionsbg: 'rgba(5, 37, 44, 0.40)',
        sectionsborder: '#197686',
      },
      fontFamily: {
        jeju: ['Jeju Myeongjo', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        roadrage: ["'Road Rage'", 'cursive'],
      },
    },
  },
  plugins: [],
}
