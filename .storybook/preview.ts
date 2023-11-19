import type { Preview } from '@storybook/vue3'
import '../src/assets/css/main.css'

import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [withThemeByDataAttribute({
        themes: {
            // nameOfTheme: 'dataAttributeForTheme',
            light: 'light',
            dark: 'dark',
        },
        defaultTheme: 'light',
        attributeName: 'data-theme',
    })]
}

export default preview
