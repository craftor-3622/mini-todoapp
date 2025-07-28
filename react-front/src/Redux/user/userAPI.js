import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const userAPI = {
  login: (data) => {
    return axios.post(`${BASE_URL}/auth/login`, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  },

  create: (data) => axios.post(`${BASE_URL}/user/`, data),
  delete: (user_id) => axios.delete(`${BASE_URL}/user/account/`, user_id),
};
