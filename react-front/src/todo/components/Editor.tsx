import { useRef, useState } from "react";
import "./Editor.css"
import { createTodoAPI } from "../../zustand/api/todoAPI";
import useTodoStore from "../../zustand/stores/useTodoStore";

const Editor = () => {
  const [content, setContent] = useState("");
  const createTodo = useTodoStore(state => state.createTodo);

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content.trim() === "") {
      alert("내용을 입력하세요.");
      return;
    }
    createTodoAPI(content);
    createTodo(content);
    setContent("");
  }

  return (
    <form className="CreateTodo" onSubmit={onSubmit}>
      <input
        type="text"
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 Todo를 입력하세요."
      />
      <button>추가</button>
    </form>
  );
}

export default Editor;
