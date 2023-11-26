import AInput from './AInput.vue'

const meta = {
    title: 'Components/AInput',
    component: AInput,
    tags: ['autodocs'],
    argTypes: {
        onInput: {
            action: 'input',
            table: { disable: true },
        },
    },
}

export default meta

export const Default = {
    args: {},
}

export const Disabled = {
    args: {
        disabled: true,
    },
}
