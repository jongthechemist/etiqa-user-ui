import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { TaskModal } from './TaskModal'

test('[TaskModal] renders nothing if not open', () => {
  const result = render(<TaskModal />)
  try {
    const inputElement = result.getByPlaceholderText('Task Name')
  } catch (e) {
    expect(e.toString()).toMatch(/[Unable to find an element]/)
  }
})

test('[TaskModal] renders empty input', () => {
  const result = render(<TaskModal isOpen />)
  const inputElement = result.getByPlaceholderText('Task Name')
  expect(inputElement).toBeInTheDocument()
})

test('[TaskModal] renders with defaultValue', () => {
  const result = render(<TaskModal isOpen defaultValue={'hello'} />)
  const inputElement = result.getByDisplayValue('hello')
  expect(inputElement).toBeInTheDocument()
})

test('[TaskModal] change value', () => {
  const result = render(<TaskModal isOpen defaultValue={'hello'} />)
  fireEvent.change(result.getByPlaceholderText('Task Name'), { target: { value: 'a' } })
  const inputElement = result.getByDisplayValue('a')
  expect(inputElement).toBeInTheDocument()
})

test('[TaskModal] click submit', () => {
  const submit = jest.fn()
  const result = render(<TaskModal isOpen defaultValue={'hello'} onSubmit={submit}/>)
  fireEvent.click(result.getByRole('button'))
  expect(submit).toBeCalled()
})
