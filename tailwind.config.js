/** @type {import('tailwindcss').Config} */

const colors = require('./src/assets/design-system/build/tailwind/color')
const spacing = require('./src/assets/design-system/build/tailwind/spacing')
const fontFamily = require('./src/assets/design-system/build/tailwind/fontFamilies')
const fontSize = require('./src/assets/design-system/build/tailwind/fontSizes')
const fontWeight = require('./src/assets/design-system/build/tailwind/fontWeights')
const lineHeight = require('./src/assets/design-system/build/tailwind/lineHeights')
const letterSpacing = require('./src/assets/design-system/build/tailwind/letterSpacing')
const textTransform = require('./src/assets/design-system/build/tailwind/textCase')
const textDecoration = require('./src/assets/design-system/build/tailwind/textDecoration')

module.exports = {
    content: ['./src/**/*.{vue,js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        screens: {
            sm: '600px',
            md: '900px',
            lg: '1200px',
            xl: '1600px',
        },
        extend: {
            colors,
            spacing,
            fontFamily,
            fontSize,
            fontWeight,
            lineHeight,
            letterSpacing,
            textTransform,
            textDecoration,
        },
    },
    plugins: [],
}
