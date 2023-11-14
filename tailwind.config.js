/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans serif'],
      },
      backgroundColor: {
        'contrast-50': '#f6f8f5',
        'contrast-100': '#ebf0e8',
        'contrast-200': '#d7e1d1',
        'contrast-300': '#b7c9ac',
        'contrast-400': '#91a880',
        'contrast-500': '#688157',
        'contrast-600': '#597049',
        'contrast-700': '#47593c',
        'contrast-800': '#3b4833',
        'contrast-900': '#313c2b',
        'contrast-950': '#181f14',
      },
      textColor: {
        'contrast-50': '#f6f8f5',
        'contrast-100': '#ebf0e8',
        'contrast-200': '#d7e1d1',
        'contrast-300': '#b7c9ac',
        'contrast-400': '#91a880',
        'contrast-500': '#688157',
        'contrast-600': '#597049',
        'contrast-700': '#47593c',
        'contrast-800': '#3b4833',
        'contrast-900': '#313c2b',
        'contrast-950': '#181f14',
      },
      colors: {
        'contrast-50': '#f6f8f5',
        'contrast-100': '#ebf0e8',
        'contrast-200': '#d7e1d1',
        'contrast-300': '#b7c9ac',
        'contrast-400': '#91a880',
        'contrast-500': '#688157',
        'contrast-600': '#597049',
        'contrast-700': '#47593c',
        'contrast-800': '#3b4833',
        'contrast-900': '#313c2b',
        'contrast-950': '#181f14',
      },
    },
  },
  plugins: [],
}
