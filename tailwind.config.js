/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-gold': '#C5B159',
        'custom-black': 'rgba(22,22,22,1)',
      },
      backgroundImage: {
        banner: "url('assets/images/tf5.jpg')",
        banner2: "url('assets/images/tf3.jpg')",
        banner3: "url('assets/images/tf8.jpg')",
        banner4: "url('assets/images/coach-tf3.jpg')",
      },
    },
  },
  plugins: [],
};
