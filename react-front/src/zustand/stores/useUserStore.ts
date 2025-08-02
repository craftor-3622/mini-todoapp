import axios from 'axios';
import { Navigate, } from 'react-router-dom';
import { create } from 'zustand'
import { persist } from "zustand/middleware"

export interface UserState {
    username: string;
    setUsername: (name: string) => void;
}

const useUserStore = create<UserState>()(persist((set) => ({
    username: "",
    setUsername: (username: string) => set({ username }),
}), { name: "username" }))

export default useUserStore;
