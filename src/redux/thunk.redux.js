import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const createAsyncStore = (typePrefix, payloadCreator) => {
  const asyncThunk = createAsyncThunk(typePrefix, async (arg, thunkAPI, ...rest) => {
    const { dispatch } = thunkAPI
    dispatch(thunkSlice.actions.setPending(typePrefix))
    try {
      const result = await payloadCreator(arg, thunkAPI, ...rest)
      dispatch(thunkSlice.actions.setFulfilled(typePrefix))
      return result
    } catch (e) {
      dispatch(thunkSlice.actions.setRejected(typePrefix))
      throw e
    }
  })
  return asyncThunk
}

const initialState = {}
const thunkSlice = createSlice({
  name: 'thunk',
  initialState,
  reducers: {
    setPending: (state, action) => {
      state[action.payload] = 'pending'
    },
    setFulfilled: (state, action) => {
      state[action.payload] = 'fulfilled'
    },
    setRejected: (state, action) => {
      state[action.payload] = 'rejected'
    },
    clearStatus: (state, action) => {
      state[action.payload] = ''
    }
  }
})

export const { clearStatus } = thunkSlice.actions

export default thunkSlice.reducer
