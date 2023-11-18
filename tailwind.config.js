/** @type {import('tailwindcss').Config} */

const colors = require('./src/assets/design-system/build/css/tw-extend/color')

module.exports = {
    content: ['./src/**/*.{vue,js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        screens: {
            sm: '600px',
            md: '900px',
            lg: '1200px',
            xl: '1600px',
        },
        colors,
        extend: {},
    },
    plugins: [],
}

