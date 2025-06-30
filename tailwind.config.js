/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      base: '0.0625rem'
    },
    colors: {
      'regal-blue': '#1989fa'
    },
    boxShadow: {
      '3xl': '0 5px 5px 1px #cbcbcb'
    }
  },
  plugins: [
    function ({addVariant}) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
