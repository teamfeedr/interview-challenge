import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

// Example test
describe('App tests', () => {
    it('renders a message', () => {
        render(<App />)
        expect(screen.getByText('6 items')).toBeInTheDocument()
    })
})
