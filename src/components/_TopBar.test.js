import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { TopBar } from './TopBar'

test('[TopBar] renders with Theme', () => {
  const result = render(
    <ThemeProvider theme={{ accent: 'blue' }}>
      <TopBar userName={'Ali'} />
    </ThemeProvider>
  )
  const userNameElement = result.getByText('Ali')
  expect(userNameElement).toBeInTheDocument()
})

test('[TopBar] renders with children', () => {
  const result = render(
    <TopBar userName={'Ali'}>
      <span>Hello World</span>
    </TopBar>
  )
  const childElement = result.getByText('Hello World')
  expect(childElement).toBeInTheDocument()
})
