import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const userAPI = {
  todoList: () => {
    return axios.get(`${BASE_URL}/todo/`)
  },
  todoMyList: () => {

  }
};
