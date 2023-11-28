import '@testing-library/jest-dom'
import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import OCard from './OCard.vue'

describe('OCard', () => {
    it('should render', () => {
        const { getByRole } = render(OCard)
        const card = getByRole('article')

        expect(card).toBeInTheDocument()
    })
})
