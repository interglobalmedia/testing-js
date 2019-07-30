import '@testing-library/react/cleanup-after-each'
import React from 'react'
import { render } from '@testing-library/react'
import Calculator from '../calculator'

test('renders', () => {
    render(<Calculator />)
})