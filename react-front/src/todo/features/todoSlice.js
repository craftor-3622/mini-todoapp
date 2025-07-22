import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    id: 0
  },
  reducers: {
    createTodo: (state, action) => {
      state.items.push({
        id: state.id++,
        content: action.payload,
        isDone: false,
        date: new Date().getTime(),
      });
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const target = state.items.find(item => item.id === action.payload);
      if (target) {
        target.isDone = !target.isDone;
      }
    }
  }, extraReducers: {

  }
})

export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer