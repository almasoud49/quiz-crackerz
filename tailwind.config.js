/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#f23c09",
      
"secondary": "#e0fc8a",
      
"accent": "#0050ba",
      
"neutral": "#3C2A3C",
      
"base-100": "#E3E6E8",
      
"info": "#3E87CC",
      
"success": "#3ADF76",
      
"warning": "#F8B763",
      
"error": "#E2465B",
      },
    },
  ],
  plugins: [require("daisyui")],
}
