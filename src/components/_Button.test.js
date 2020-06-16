import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './Button'
import { ThemeProvider } from 'styled-components'

test('[Button] renders', () => {
  const result = render(<Button>Hello</Button>)
  expect(result.getByRole('button')).toHaveTextContent('Hello')
})
test('[Button] renders primary', () => {
  const result = render(<Button primary>Hello</Button>)
  expect(result.getByRole('button')).toHaveTextContent('Hello')
})
test('[Button] renders with theme', () => {
  const result = render(
    <ThemeProvider theme={{ accent: '#fff' }}>
      <Button primary>Hello</Button>
    </ThemeProvider>
  )
  expect(result.getByRole('button')).toHaveTextContent('Hello')
})
