import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../Redux/todo/todoSlice'
import userReducer from '../Redux/user/userSlice'

const store = configureStore({
  reducer: {
    todo: todoReducer,
    user: userReducer,
  },
})

export default store;