import { createAsyncThunk } from '@reduxjs/toolkit'
import { userAPI } from './userAPI'

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const formData = new URLSearchParams();
      formData.append("username", data.username);
      formData.append("password", data.password);

      const response = await userAPI.login(data);
      console.log(response.data);
      localStorage.setItem('token', response.data.access_token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
)

