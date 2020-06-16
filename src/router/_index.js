import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'

const RouterProvider = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
RouterProvider.propTypes = {
  children: PropTypes.node
}
export { RouterProvider }