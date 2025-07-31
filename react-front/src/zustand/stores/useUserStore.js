import axios from 'axios';
import { create } from 'zustand'
import { persist } from "zustand/middleware"

const BASE_URL = "http://127.0.0.1:8000";

const useUserStore = create(persist((set) => ({
    username: null,

    login: async (data) => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/login`, data, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            });
            const json = response.data;
            set({ username: json.user.username }),
            localStorage.setItem("token", json.access_token);
        } catch (error) {
            console.error("login failed:", error);
        }
    },

    logout: () => {
        set({ username: null });
        localStorage.removeItem("token");
    }
})))

export default useUserStore;
//   create: (data) => axios.post(`${BASE_URL}/user/`, data),
//   delete: (user_id) => axios.delete(`${BASE_URL}/user/account/`, user_id),
