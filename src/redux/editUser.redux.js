import { createSlice } from '@reduxjs/toolkit'
import { createAsyncStore } from './thunk.redux'
import { putUser, getUser } from '../services/user.service'

export const fetchUser = createAsyncStore('users/fetchUser', async ({ uuid }) => {
  const result = await getUser({ id: uuid })
  return result
})

export const submitEditUser = createAsyncStore('put/user', async (action, { getState }) => {
  const { editUser } = getState()
  const response = await putUser({
    id: editUser.uuid,
    username: editUser.username,
    email: editUser.email,
    phone: editUser.phone,
    skillsets: editUser.skillsets.split(' '),
    hobby: editUser.hobby
  })
  return response
})

const initialState = {
  uuid: '',
  username: '',
  email: '',
  phone: '',
  skillsets: [],
  hobby: []
}
const editUserSlice = createSlice({
  name: 'editUser',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state[action.payload.key] = action.payload.value
    }
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.uuid = action.payload.uuid
      state.username = action.payload.username
      state.email = action.payload.email
      state.phone = action.payload.phone
      state.skillsets = action.payload.skillsets ? action.payload.skillsets.join(' ') : []
      state.hobby = action.payload.hobby
    },
    [submitEditUser.fulfilled]: (state, action) => {
      debugger
      state.username = initialState.username
      state.email = initialState.email
      state.phone = initialState.phone
      state.skillsets = initialState.skillsets
      state.hobby = initialState.hobby
    }
  }
})

export const { setValue } = editUserSlice.actions

export default editUserSlice.reducer
