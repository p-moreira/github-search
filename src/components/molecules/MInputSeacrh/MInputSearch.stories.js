import MInputSearch from './MInputSearch.vue'

const meta = {
    title: 'Components/MInputSearch',
    component: MInputSearch,
    tags: ['autodocs'],
    argTypes: {
        onSubmit: {
            action: 'submit',
            table: { disable: true },
        },
        submit: {
            description: 'submit event',
            table: { type: { summary: '-' } },
        },
    },
}

export default meta

export const Default = {
    args: {},
}
