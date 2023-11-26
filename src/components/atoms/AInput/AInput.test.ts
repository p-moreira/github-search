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
})
