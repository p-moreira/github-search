import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import AInput from './AInput.vue'

describe('AInput', () => {
    it('renders the input', () => {
        const { getByRole } = render(AInput)
        const input = getByRole('textbox')

        expect(input).toBeInTheDocument()
    })
})
