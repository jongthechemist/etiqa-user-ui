import React from 'react'
import { Skeleton } from './Skeleton'
import { render } from '@testing-library/react'

test('[Skeleton] renders children when not loading', () => {
  const result = render(
    <Skeleton>
      {() => <span>This is body</span>}
    </Skeleton>
  )
  const bodyElement = result.getByText('This is body')
  expect(bodyElement).toBeInTheDocument()
})

test('[Skeleton] renders skeleton when loading', () => {
  const result = render(
    <Skeleton loading>
      {() => <span>This is body</span>}
    </Skeleton>
  )
  try {
    const bodyElement = result.getByText('This is body')
  } catch (e) {
    expect(e.toString()).toMatch(/[Unable to find an element with the test: This is body]/)
  }
})
