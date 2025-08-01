import { Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./index/components/Header.jsx";
import Todo from "./todo/Todo.jsx";
import Login from "./user/Login.js";

function App() {
  return (
    <div className="body">
      <Header />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/todo" element={<Todo />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
