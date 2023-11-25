import AButton from './AButton.vue'

const meta = {
    title: 'Components/AButton',
    component: AButton,
    tags: ['autodocs'],
    argTypes: {
        onClick: {
            action: 'clicked',
            table: { disable: true },
        },
        click: {
            description: 'click event',
            table: { type: { summary: '-' } },
        },
    },
}

export default meta

export const Default = {
    args: {
        label: 'Button',
        disabled: false,
    },
}
