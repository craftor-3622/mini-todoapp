import axios from 'axios';
import { create } from 'zustand'

const BASE_URL = "http://127.0.0.1:8000";

const useUserStore = create((set) => ({
    user: null,
    loading: false,

    login: async (data) => {
        set({ loading: true });
        try {
            const response = await axios.post(`${BASE_URL}/auth/login`, data, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            });

            console.log(response.data);
        } catch (error) {
            console.error("login failed:", error);
        } finally {
            set({ loading: false });
        }
    }
}))

export default useUserStore;
//   create: (data) => axios.post(`${BASE_URL}/user/`, data),
//   delete: (user_id) => axios.delete(`${BASE_URL}/user/account/`, user_id),
