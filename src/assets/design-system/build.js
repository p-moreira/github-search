/* eslint-disable no-console */
const StyleDictionaryPackage = require('style-dictionary')
const global = require('./tokens/global.json')
const light = require('./tokens/light.json')
const dark = require('./tokens/dark.json')

const supportedTokenTypeList = [
    'color',
    'spacing',
    'fontFamilies',
    'fontSizes',
    'fontWeights',
    'lineHeights',
    'letterSpacing',
    'textCase',
    'textDecoration',
    'borderRadius',
    'opacity',
]

const formatValue = (tokenType, value) => {
    let formattedValue
    switch (tokenType) {
        case 'color':
        default:
            formattedValue = value
    }
    return formattedValue
}

/**
 * Custom format that handle reference in css variables
 */
StyleDictionaryPackage.registerFormat({
    name: 'css/variables',
    formatter({ dictionary }) {
        return `${this.selectorName} {
    ${dictionary.allProperties
        .map((token) => {
            const value = formatValue(token.type, token.value)

            if (dictionary.usesReference(token.original.value)) {
                const reference = dictionary.getReferences(token.original.value)
                const referenceName = reference[0].name
                return `  --${token.name}: var(--${referenceName}, ${value});`
            }

            return `  --${token.name}: ${value};`
        })
        .join('\n')}
    }`
    },
})

/**
 * Custom format that generate tailwind color config based on css variables
 */
StyleDictionaryPackage.registerFormat({
    name: 'tw/css-variables',
    formatter({ dictionary }) {
        return (
            'module.exports = ' +
            `{\n${dictionary.allProperties
                .map((token) => {
                    const value = formatValue(token.type, token.value)
                    return `  "${token.name}": "var(--${token.name}, ${value});"`
                })
                .join(',\n')}\n}`
        )
    },
})

/**
 * Returns the files configuration
 * for generating seperated tailwind files.
 */
function getConfigTailwindFilesByType(typeList) {
    return typeList.map((typeName) => {
        return {
            destination: `tailwind/${typeName}.js`,
            format: 'tw/css-variables',
            filter: {
                type: typeName,
            },
        }
    })
}

function getStyleDictionaryConfig(tokensConfig = {}) {
    const { brand, buildTailwindFiles, tokens, selectorName } = tokensConfig

    let configTailwindFilesByType = []

    if (buildTailwindFiles) {
        configTailwindFilesByType = getConfigTailwindFilesByType(supportedTokenTypeList)
    }

    return {
        tokens,
        platforms: {
            web: {
                transformGroup: 'web',
                prefix: 'ds',
                buildPath: './build/',
                files: [
                    {
                        destination: `css/${brand}-variables.css`,
                        format: 'css/variables',
                        selectorName,
                    },
                    ...configTailwindFilesByType,
                ],
            },
        },
    }
}

console.log('Build started...')

const configs = [
    {
        brand: 'global',
        buildTailwindFiles: true,
        selectorName: ':root',
        tokens: global,
    },
    {
        brand: 'dark',
        buildTailwindFiles: false,
        selectorName: '[data-theme="dark"]',
        tokens: dark,
    },
    {
        brand: 'light',
        buildTailwindFiles: true,
        selectorName: '[data-theme="light"]',
        tokens: light,
    },
]

configs.map((config) => {
    console.log('\n==============================================')
    console.log(`\nProcessing:  [Web] [${config.brand}]`)

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(config))

    StyleDictionary.buildPlatform('web')

    console.log('\nEnd processing')
})

console.log('\n==============================================')
console.log('\nBuild completed!')
