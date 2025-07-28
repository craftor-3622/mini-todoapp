import { create } from 'zustand'

const useUserStore = create((set) => ({
    id: 0,
    todos: [],

    createTodo: (content) => set((state) => ({
        id: state.id + 1,
        todos: [
            ...state.todos,
            {
                id: state.id++,
                content: content,
                isDone: false,
                date: new Date().getTime(),
            }
        ]
    })),

    deleteTodo: (targetId) => set((state) => ({
        todos: state.todos.filter((item) => item.id !== targetId)
    })),

    updateTodo: (targetId) => set((state) => ({
        todos: state.todos.map((item) =>
            item.id === targetId ? { ...item, isDone: !item.isDone } : item
        )
    }))
}));
