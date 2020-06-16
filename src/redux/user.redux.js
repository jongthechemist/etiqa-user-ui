import { createSlice, createSelector } from '@reduxjs/toolkit'
import { getUserList, deleteUser } from '../services/user.service'
import { createAsyncStore } from './thunk.redux'

//#region AsyncThunk
export const fetchUsers = createAsyncStore('users/fetchUsers', async (_payload, { dispatch }) => {
  const result = await getUserList()
  dispatch(userSlice.actions.setFilter(''))
  return result
})

export const removeUser = createAsyncStore('users/removeUser', async ({ id }, { dispatch }) => {
  const result = await deleteUser({ id })
  dispatch(fetchUsers())
  return result
})

//#endregion

//#region Slicer

const initialState = {
  userList: [],
  filter: ''
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    }
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.userList = action.payload
    }
  }
})
export const {
  setFilter
} = userSlice.actions

//#endregion

//#region Selectors
export const filteredUsersSelector = createSelector(
  ({ user }) => user.userList,
  ({ user }) => user.filter,
  (list = [], filter = '') =>
    list.filter(
      (user) => !filter || String(user.username).toLowerCase().includes(String(filter).toLowerCase())
    )
)

//#endregion
export default userSlice.reducer
