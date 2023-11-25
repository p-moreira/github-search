import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/vue'
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

    it('receives "disabled: true" prop and renders the button disabled state', () => {
        const { getByRole } = render(AButton, { props: { disabled: true } })
        const button = getByRole('button')

        expect(button).toBeDisabled()
    })

    it('receives "disabled: false" prop and renders the button default state', () => {
        const { getByRole } = render(AButton, { props: { disabled: false } })
        const button = getByRole('button')

        expect(button).not.toBeDisabled()
    })

    it('receives no "disabled" prop and renders the button default state', () => {
        const { getByRole } = render(AButton)
        const button = getByRole('button')

        expect(button).not.toBeDisabled()
    })

    it('receives the "label" prop and renders the button label', () => {
        const { getByRole } = render(AButton, { props: { label: 'Button label' } })
        const button = getByRole('button')

        expect(button).toHaveTextContent('Button label')
    })

    it('receives no "label" prop and renders the default button label', () => {
        const { getByRole } = render(AButton)
        const button = getByRole('button')

        expect(button).toHaveTextContent('Button')
    })

    it('emits click event when button is clicked', async () => {
        const { getByRole, emitted } = render(AButton)
        const button = getByRole('button')

        await fireEvent.click(button)

        // Event name
        expect(emitted()).toHaveProperty('click')
        // Event count
        expect(emitted().click).toHaveLength(1)
        // Event payload
        expect(emitted().click[0]).toHaveLength(0)
    })
})
