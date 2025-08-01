import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css"
import useTodoStore from '../../zustand/stores/useTodoStore'
import { getTodosAPI } from "../../zustand/api/todoAPI";

const TodoList = () => {
  const todos = useTodoStore(state => state.todos);
  const setTodos = useTodoStore((state) => state.setTodos);

  const [search, setSearch] = useState("");
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()));
  };

  // todo state가 TodoList Component에서 정의됨
  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodosAPI();
      setTodos(data);
    }

    fetchTodos();
  }, []);

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