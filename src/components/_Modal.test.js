import React from 'react'
import { render } from '@testing-library/react'
import { Modal } from './Modal'

test('[Modal] renders', () => {
  const result = render(
    <Modal isOpen header={'Hello'}>
      <span>This is body</span>
    </Modal>
  )
  const headerElement = result.getByText('Hello')
  const bodyElement = result.getByText('This is body')
  expect(headerElement).toBeInTheDocument()
  expect(bodyElement).toBeInTheDocument()
})
