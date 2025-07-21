import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: ''
  },
  extraReducers: {

  },
})

export default userSlice.reducer