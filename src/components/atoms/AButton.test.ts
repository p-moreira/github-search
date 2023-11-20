import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import AButton from './AButton.vue'

describe('AButton', () => {
    it('renders the button', () => {
        const { getByRole } = render(AButton)
        const button = getByRole('button')

        expect(button).toBeInTheDocument()
    })

    it('renders the button label', () => {
        const { getByRole } = render(AButton)
        const button = getByRole('button')

        expect(button).toHaveTextContent('Button')
    })

    it('receives the "disabled" prop and renders the button disabled state', () => {
        const { getByRole } = render(AButton, { props: { disabled: true } })
        const button = getByRole('button')

        expect(button).toBeDisabled()
    })
})
