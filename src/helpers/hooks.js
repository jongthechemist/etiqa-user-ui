import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isFunction, get } from 'lodash'
import { ThemeContext } from 'styled-components'
import { clearStatus } from '../redux/thunk.redux'

/**
 * Wrap actions with dispatch
 * @param {Action} action Action or action creator to dispatch
 */
export const useDispatchAction = (action) => {
  const dispatch = useDispatch()
  return React.useCallback(
    (...args) => {
      if (isFunction(action)) {
        return dispatch(action(...args))
      } else {
        return dispatch(action)
      }
    },
    [action, dispatch]
  )
}

/**
 * Get Redux state at given path
 * @param {string} path Path to state in Redux using dot notation
 * @param {any} defaultValue Default value if state is not defined in Redux
 * @param {function} equalityFn Equality function to compare changes to state
 */
export const useStatePath = (path, defaultValue, equalityFn = undefined) => {
  const selector = useSelector((state) => get(state, path, defaultValue), equalityFn)
  return selector
}

/**
 * Get accent color
 */
export const useAccent = () => {
  const { accent } = React.useContext(ThemeContext)
  return accent
}

/**
 * Get status for thunk
 * @param {*} asyncThunk asyncThunk generator
 */
export const useThunkStatus = (asyncThunk) => {
  const dispatch = useDispatch()
  const selector = useSelector(({ thunk }) => thunk[asyncThunk.typePrefix])
  const clear = useCallback(() => {
    dispatch(clearStatus(asyncThunk.typePrefix))
  }, [dispatch, asyncThunk.typePrefix])
  return [selector, clear]
}

/**
 * Boolean state that toggles true/false
 */
export const useToggle = () => {
  const [state, setState] = useState(false)
  const toggle = useCallback(() => setState(state=>!state), [])
  return [state, toggle]
}