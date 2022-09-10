const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.serif]
    },
    extend: {
      colors: {
        'primary-0': '#FFFFFF',
        'primary-100': '#DCE4FF',
        'primary-200': '#BAC8FF',
        'primary-300': '#98ABFF',
        'primary-400': '#7E95FF',
        'primary-500': '#546FFF',
        'primary-600': '#3D53DB',
        'primary-700': '#2A3BB7',
        'primary-800': '#1A2793',
        'primary-900': '##10197A',
        'success-100': '#F5FCD2',
        'success-200': '#E8FAA6',
        'success-300': '#D3F178',
        'success-400': '#BCE455',
        'success-500': '#9CD323',
        'success-600': '#7FB519',
        'success-700': '#659711',
        'success-800': '#4C7A0B',
        'success-900': '#3B6506',
        'error-100': '#FFE7D3',
        'error-200': '#FFC8A6',
        'error-300': '#FFA37A',
        'error-400': '#FF7F59',
        'error-500': '#FF4423',
        'error-600': '#DB2719',
        'error-700': '#B71112',
        'error-800': '#930B16',
        'error-900': '#7A0619',
        'warning-100': '#FFF8D7',
        'warning-200': '#FFEFB0',
        'warning-300': '#FFE488',
        'warning-400': '#FFD96B',
        'warning-500': '#FFC73A',
        'warning-600': '#DBA32A',
        'warning-700': '#B7821D',
        'warning-800': '#936312',
        'warning-900': '#7A4D0B',
        'information-100': '#DCF3FF',
        'information-200': '#BAE5FF',
        'information-300': '#98D3FF',
        'information-400': '#7EC2FF',
        'information-500': '#54A6FF',
        'information-600': '#3D81DB',
        'information-700': '#2A60B7',
        'information-800': '#1A4393',
        'information-900': '#102E7A',
        'secondary-100': '#DFE1F3',
        'secondary-200': '#C2C6E8',
        'secondary-300': '#8E92BC',
        'secondary-400': '#54577A',
        'secondary-500': '#141522',
        'secondary-600': '#0E0F1D',
        'secondary-700': '#0A0A18',
        'secondary-800': '#060713',
        'secondary-900': '#030410'
      }
    }
  },
  plugins: []
}
