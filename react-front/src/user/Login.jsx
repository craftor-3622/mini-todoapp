import { useState } from "react";
import "./Login.css"
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onSubmit = () => {
    dispatch();
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