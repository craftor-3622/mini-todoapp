import { useState } from "react";
import useUserStore from "../zustand/stores/useUserStore";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    }

    login(data);
    navigate('/todo');
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