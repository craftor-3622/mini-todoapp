import "./TodoItem.css"
import useTodoStore from '../../zustand/stores/useTodoStore'
import { Todo } from "../../types/todo";
import { deleteTodoAPI, updateTodosAPI } from "../../zustand/api/todoAPI";

interface TodoProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoProps) => {
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  const onUpdateTodo = async (isDone: boolean, todoId: number) => {
    try {
      await updateTodosAPI(todoId, isDone);
      updateTodo(todoId);
    } catch (e) {
      console.error("Update failed", e);
    }
  }

  const onDeleteTodo = async (todoId: number) => {
    try {
      await deleteTodoAPI(todoId);
      deleteTodo(todoId);
    } catch (e) {
      console.error("Delete failed", e);
    }
  }

  return (
    <>
      <div className="TodoItem">
        <div className="TodoName">
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={() => onUpdateTodo(!todo.isDone, todo.id)}
          />
          <span> {todo.content} </span>
        </div>
        <div>
          <span className="Tododate"> {new Date(todo.created_at).toLocaleDateString()} </span>
          <button
            className="DeleteBtn"
            onClick={() => onDeleteTodo(todo.id)}
          >삭제</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default TodoItem;