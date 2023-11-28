import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'
import MInputSearch from './MInputSearch.vue'

describe('MInputSearch', () => {
    it('should render', () => {
        const { getByRole } = render(MInputSearch, {})

        const input = getByRole('textbox')
        const button = getByRole('button')

        expect(input).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })

    it('should emit the submit event', async () => {
        const { getByRole, emitted } = render(MInputSearch)

        const input = getByRole('textbox')
        const button = getByRole('button')

        await fireEvent.update(input, 'pedro')
        await fireEvent.click(button)

        // Event name
        expect(emitted()).toHaveProperty('submit')
        // Event count
        expect(emitted().submit).toHaveLength(1)
        // Event payload
        expect(emitted().submit[0]).toHaveLength(1)
        expect(emitted().submit[0]).toEqual(['pedro'])
    })
})
