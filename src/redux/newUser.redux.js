import { createSlice } from '@reduxjs/toolkit'
import { createAsyncStore } from './thunk.redux'
import { postUser } from '../services/user.service'

export const submitNewUser = createAsyncStore('post/user', async (action, { getState }) => {
  const { newUser } = getState()
  return postUser({
    username: newUser.username,
    email: newUser.email,
    phone: newUser.phone,
    skillsets: newUser.skillsets.split(' '),
    hobby: newUser.hobby
  })
})

const initialState = {
  username: '',
  email: '',
  phone: '',
  skillsets: [],
  hobby: []
}
const userSubmitSlice = createSlice({
  name: 'newUser',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state[action.payload.key] = action.payload.value
    }
  },
  extraReducers: {
    [submitNewUser.fulfilled]: (state) => {
      state.username = initialState.username
      state.email = initialState.email
      state.phone = initialState.phone
      state.skillsets = initialState.skillsets
      state.hobby = initialState.hobby
    }
  }
})

export const { setValue } = userSubmitSlice.actions

export default userSubmitSlice.reducer
