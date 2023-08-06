/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "375px",
      _4k: "2560px",
    },
    extend: {
      fontFamily: {
        grenzeL300: ["'grenze'"],
        gelgooR400: ["'Glegoo'"],
        montagaR400: ["'Montaga'"],
      },
      colors: {
        hex_FFE090: "#FFE090",
        hex_9A6F00: "#9A6F00",
      },
    },
  },
  plugins: [],
};
