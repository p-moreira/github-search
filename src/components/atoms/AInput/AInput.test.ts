import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'
import AInput from './AInput.vue'

describe('AInput', () => {
    it('renders the input', () => {
        const { getByRole } = render(AInput)
        const input = getByRole('textbox')

        expect(input).toBeInTheDocument()
    })

    it('emits the right events when updating the input text', async () => {
        const { getByRole, emitted } = render(AInput)
        const input = getByRole('textbox')

        expect(input).toHaveValue('')

        await fireEvent.update(input, 'test')

        expect(input).toHaveValue('test')

        // Event name
        expect(emitted()).toHaveProperty('input')
        expect(emitted()).toHaveProperty('update:modelValue')

        // Event count
        expect(emitted().input).toHaveLength(1)
        expect(emitted()['update:modelValue']).toHaveLength(1)

        // Event payload
        expect(emitted().input[0]).toHaveLength(1)
        expect(emitted()['update:modelValue'][0]).toHaveLength(1)
        expect(emitted()['update:modelValue'][0]).toEqual(['test'])
    })

    it('receives the "value" prop and renders the input value', () => {
        const { getByRole } = render(AInput, { props: { value: 'test' } })
        const input = getByRole('textbox')

        expect(input).toHaveValue('test')
    })

    it('receives the "placeholder" prop and renders the input placeholder', () => {
        const { getByRole } = render(AInput, { props: { placeholder: 'test' } })
        const input = getByRole('textbox')

        expect(input).toHaveAttribute('placeholder', 'test')
    })

    it('receives no "type" prop and renders the input default type', () => {
        const { getByRole } = render(AInput)
        const input = getByRole('textbox')

        expect(input).toHaveAttribute('type', 'text')
    })

    it('receives the "disabled" prop and renders the input disabled state', () => {
        const { getByRole } = render(AInput, { props: { disabled: true } })
        const input = getByRole('textbox')

        expect(input).toBeDisabled()
    })

    it('receives no "disabled" prop and renders the input default state', () => {
        const { getByRole } = render(AInput)
        const input = getByRole('textbox')

        expect(input).not.toBeDisabled()
    })

    it('emits the keyup event', async () => {
        const { getByRole, emitted } = render(AInput)
        const input = getByRole('textbox')

        expect(input).toHaveValue('')

        await fireEvent.keyUp(input, 't')

        // Event name
        expect(emitted()).toHaveProperty('keyup')

        // Event count
        expect(emitted().keyup).toHaveLength(1)

        // Event payload
        expect(emitted().keyup[0]).toHaveLength(1)
    })
})
