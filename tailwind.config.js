/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 원하는 이름: 색상값
        brand: "#1e40af", // 예: 브랜드 기본색
        softgray: "#f4f4f5", // 예: 부드러운 회색
        danger: {
          light: "#fca5a5",
          DEFAULT: "#ef4444",
          dark: "#b91c1c",
        },
      },
    },
  },
  plugins: [],
};
