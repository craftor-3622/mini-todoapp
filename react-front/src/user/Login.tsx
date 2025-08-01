import { useState } from "react";
import useUserStore from "../zustand/stores/useUserStore";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { login } from "../zustand/api/userAPI";

const Login = () => {
  const [username, setUsernameInput] = useState("");
  const [password, setPasswordInput] = useState("");
  const setUsername = useUserStore(state => state.setUsername);
  const navigate = useNavigate();

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameInput(e.target.value);
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    }

    login(data);
    setUsername(username);
    navigate('/');
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <input
        type="text"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <button type="submit">로그인</button>
    </form>
  )
}

export default Login;