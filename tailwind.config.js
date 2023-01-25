/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        "mainBgColor":"#191a1a",
        "secondaryBgColor":"#252728",
        "thirdBgColor":"#373b3d",
        "whiteBgColor":"#F9F9F9"
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif']
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
