/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins','sans-serif'],
      },
      boxShadow:{
        'inner-md' : 'inset -10px 10px 20px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};

