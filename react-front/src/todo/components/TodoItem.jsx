import "./TodoItem.css"
import useUserStore from '../../zustand/stores/useTodoStore'

const TodoItem = ({ todo }) => {
  const updateTodo = useUserStore((state) => state.updateTodo);
  const deleteTodo = useUserStore((state) => state.deleteTodo);

  return (
    <>
      <div className="TodoItem">
        <div className="TodoName">
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={() => updateTodo(todo.id)}
          />
          <span> {todo.content} </span>
        </div>
        <div>
          <span className="Tododate"> {new Date(todo.date).toLocaleDateString()} </span>
          <button
            className="DeleteBtn"
            onClick={() => deleteTodo(todo.id)}
          >삭제</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default TodoItem;