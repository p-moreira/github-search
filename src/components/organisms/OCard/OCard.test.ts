import '@testing-library/jest-dom'
import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import OCard from './OCard.vue'

describe('OCard', () => {
    it('should render', () => {
        const { getByRole } = render(OCard, {
            props: {
                login: 'vuejs-br',
                link: 'https://avatars.githubusercontent.com/u/4138302?v=4',
            },
        })
        const card = getByRole('article')

        expect(card).toBeInTheDocument()
    })
})
