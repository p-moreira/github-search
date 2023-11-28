import '@testing-library/jest-dom'
import { createTestingPinia } from '@pinia/testing'
import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import OHeaderMain from './OHeaderMain.vue'

describe('OHeaderMain', () => {
    it('should render', () => {
        const { getByRole } = render(OHeaderMain, {
            global: {
                plugins: [createTestingPinia()],
            },
        })
        const header = getByRole('banner')

        expect(header).toBeInTheDocument()
    })
})
