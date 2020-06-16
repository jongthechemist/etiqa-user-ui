import React from 'react'
import * as ReactRedux from 'react-redux'
import * as StyledComponent from 'styled-components'
import { useDispatchAction, useStatePath, useAccent } from './hooks'

beforeEach(() => {
  jest.clearAllMocks()
  jest.spyOn(React, 'useCallback').mockImplementation((callback) => (...args) => callback(...args))
})

jest.mock('react-redux')
test('[HOOKS]: useDispatchAction dispatches action object', () => {
  const action = 'Hello'
  const dispatch = jest.fn()
  jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => dispatch)

  const dispatchAction = useDispatchAction(action)
  dispatchAction()

  expect(dispatch).toBeCalledWith('Hello')
})
test('[HOOKS]: useDispatchAction dispatches action creator', () => {
  const action = jest.fn().mockImplementation(() => 'Hello')
  const dispatch = jest.fn()
  jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => dispatch)

  const dispatchAction = useDispatchAction(action)
  dispatchAction()

  expect(dispatch).toBeCalledWith('Hello')
})
test('[HOOKS]: useStatePath select state at path', () => {
  const state = { value: 'hello' }
  jest.spyOn(ReactRedux, 'useSelector').mockImplementation((selector) => selector(state))

  const value = useStatePath('value')
  expect(value).toBe('hello')
})
test('[HOOKS]: useAccent select accent from ThemeContext', () => {
  const context = { accent: 'red' }
  jest.spyOn(React, 'useContext').mockImplementation(() => context)

  const accent = useAccent()
  expect(accent).toBe('red')
})

