import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../todo/features/todoSlice'

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
})