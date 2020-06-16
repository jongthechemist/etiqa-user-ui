import React from 'react'
import { render } from '@testing-library/react'
import { TaskItem } from './TaskItem'

test('[TaskItem] renders', () => {
  const result = render(
    <TaskItem name={'hello'}/>
  )
  const bodyElement = result.getByText('hello')
  expect(bodyElement).toBeInTheDocument()
})

test('[TaskItem] renders completed', () => {
  const result = render(
    <TaskItem name={'hello completed'} completed/>
  )
  const bodyElement = result.getByText('hello completed')
  expect(bodyElement).toBeInTheDocument()
})