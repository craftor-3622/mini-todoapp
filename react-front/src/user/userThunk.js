import { createAsyncThunk } from '@reduxjs/toolkit'
import { userAPI } from './userAPI'

const loginUser = createAsyncThunk(
  'auth/login',
  async (thunkAPI) => {
    const response = await userAPI.login()
    console.log(response)
  },
)

