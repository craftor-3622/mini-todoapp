export interface User {
    id: number;
    username: string;
    email: string;
    isActive: boolean;
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    tokenType: string;
    user: User;
}