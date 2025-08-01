import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const getTodosAPI = async () => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios.get(`${BASE_URL}/todo/`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const createTodoAPI = async (content: string) => {
    const token = localStorage.getItem("token");
}

