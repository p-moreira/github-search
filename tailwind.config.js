/** @type {import('tailwindcss').Config} */

import colors from './src/assets/design-system/build/tailwind/color'
import spacing from './src/assets/design-system/build/tailwind/spacing'
import fontFamily from './src/assets/design-system/build/tailwind/fontFamilies'
import fontSize from './src/assets/design-system/build/tailwind/fontSizes'
import fontWeight from './src/assets/design-system/build/tailwind/fontWeights'
import lineHeight from './src/assets/design-system/build/tailwind/lineHeights'
import letterSpacing from './src/assets/design-system/build/tailwind/letterSpacing'
import textTransform from './src/assets/design-system/build/tailwind/textCase'
import textDecoration from './src/assets/design-system/build/tailwind/textDecoration'
import borderRadius from './src/assets/design-system/build/tailwind/borderRadius'
import opacity from './src/assets/design-system/build/tailwind/opacity'

export default {
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
            borderRadius,
            opacity,
        },
    },
    plugins: [],
}
