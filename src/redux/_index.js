import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user.redux'
import newUserReducer from './newUser.redux'
import editUserReducer from './editUser.redux'
import thunkReduccer from './thunk.redux'

const reducer = {
  user: userReducer,
  newUser: newUserReducer,
  editUser: editUserReducer,
  thunk: thunkReduccer
}

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export const ReduxProvider = ({
  children
}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}