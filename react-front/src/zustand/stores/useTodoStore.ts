import { create } from 'zustand'
import { getTodosAPI } from '../api/todoAPI'
import { combine } from 'zustand/middleware';
import { Todo } from '../../types/todo';

interface TodoStore {
    id: number;
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
    createTodo: (content: string) => void;
    updateTodo: (targetId: number) => void;
    deleteTodo: (targetId: number) => void; 
}

const useTodoStore = create<TodoStore>()((set) => ({
    id: 0,
    todos: [],

    setTodos: (todos) => {
        const maxId = todos.reduce((acc, cur) => Math.max(acc, cur.id), 0);
        set({
            id: maxId + 1,
            todos: todos,
        })
    },

    createTodo: (content) => set((state) => {
        const nextId = state.id;
        const newTodo: Todo = {
            id: nextId,
            content: content,
            isDone: false,
            date: new Date(),
        }

        return {
            id: nextId + 1,
            todos: [...state.todos, newTodo],
        }
    }),

    updateTodo: (targetId) => set((state) => ({
        todos: state.todos.map((item) =>
            item.id === targetId ? { ...item, isDone: !item.isDone } : item
        )
    })),

    deleteTodo: (targetId) => set((state) => ({
        todos: state.todos.filter((item) => item.id !== targetId)
    })),
}));

export default useTodoStore;
