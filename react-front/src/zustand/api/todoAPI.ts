import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const getTodosAPI = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/todo`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const createTodoAPI = async (content: string) => {
    const token = localStorage.getItem("token");

    try {
        await axios.post(`${BASE_URL}/todo`,
            { "content": content },
            { headers: { Authorization: `Bearer ${token}` } }
        );
    } catch (error) {
        console.error(error);
    }
}

export const updateTodosAPI = async (todoId: number, isDone: boolean) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios.put(`${BASE_URL}/todo/${todoId}`,
            { "isDone": isDone },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteTodoAPI = async (todoId: number) => {
    const token = localStorage.getItem("token");

    try {
        await axios.delete(`${BASE_URL}/todo/${todoId}`,
            { headers: { Authorization: `Bearer ${token}` } }
        );
    } catch (error) {
        console.error(error);
    }
}
