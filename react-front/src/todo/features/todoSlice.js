import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [
      {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime(),
      },
      {
        id: 1,
        isDone: false,
        content: "빨래하기",
        date: new Date().getTime(),
      },
      {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        date: new Date().getTime(),
      },
    ],
    id: 3
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
  },
})

export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer