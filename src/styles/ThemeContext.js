import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

/**
 * Provide theme from styled-components
 */
export const ThemeProvider = ({ children }) => {
  return <StyledThemeProvider theme={{ accent: '#5285ec', warn: 'red' }}>{children}</StyledThemeProvider>
}
ThemeProvider.propTypes = {
  children: PropTypes.node
}
