import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from './userThunk'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    item: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.item = action.payload;
    });
  },
})

export default userSlice.reducer