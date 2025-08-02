import axios from "axios";
import { LoginRequest } from "../../types/auth"

const BASE_URL = "http://127.0.0.1:8000";

export const login = async (data: LoginRequest) => {
    try {
        const formData = new URLSearchParams();
        formData.append("username", data.username);
        formData.append("password", data.password);

        const response = await axios.post(`${BASE_URL}/auth/login`, formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        });
        const json = response.data;
        localStorage.setItem("token", json.access_token);
        return json.user;
    } catch (error) {
        console.error("login failed:", error);
    }
}

export const logout = () => {
    localStorage.removeItem("token");
}