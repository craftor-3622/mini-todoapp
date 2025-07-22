import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const userAPI = {
  login: (data) => axios.post(`${BASE_URL}/auth/login`, data),
  create: (data) => axios.post(`${BASE_URL}/users/signup`, data),
};
