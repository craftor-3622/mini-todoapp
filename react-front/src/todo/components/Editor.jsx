import { useRef, useState } from "react";
import "./Editor.css"
import { useDispatch } from "react-redux";
import { createTodo } from "../../Redux/todo/todoSlice";

const Editor = () => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const dispatch = useDispatch();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === "") {
      alert("내용을 입력하세요.");
      contentRef.current.focus();
      return;
    }
    dispatch(createTodo(content));
    setContent("");
  }

  return (
    <form className="CreateTodo" onSubmit={onSubmit}>
      <input
        ref={contentRef}
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
