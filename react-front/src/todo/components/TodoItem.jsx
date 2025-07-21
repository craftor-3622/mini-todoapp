import { deleteTodo, updateTodo } from "../features/todoSlice";
import "./TodoItem.css"
import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const onChangeCheckbox = () => {
    dispatch(updateTodo(todo.id));
  };

  const onClickDeleteBtn = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <>
      <div className="TodoItem">
        <div className="TodoName">
          <input
            type="checkbox"
            checked= {todo.isDone}
            onChange={onChangeCheckbox}
          />
          <span> {todo.content} </span>
        </div>
        <div>
          <span className="Tododate"> {new Date(todo.date).toLocaleDateString()} </span>
          <button
            className="DeleteBtn"
            onClick={onClickDeleteBtn}
          >삭제</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default TodoItem;