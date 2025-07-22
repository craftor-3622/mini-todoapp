import { createSlice } from "@reduxjs/toolkit";
import { userAPI } from './userAPI'
import { loginUser } from './userThunk'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: ''
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      
    });
  },
})

export default userSlice.reducer