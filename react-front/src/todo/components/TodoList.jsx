import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css"
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.items);

  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if(search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()));
  };

  // todo state가 TodoList Component에서 정의됨
  useEffect(() => { console.log(todos) }, [todos]);

  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="Searchbar"
        type="text"
        placeholder="검색어를 입력하세요."
      />
      <hr className="divider" />
      {getFilteredData().map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
}

export default TodoList;