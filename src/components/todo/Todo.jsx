import React from "react";
import "./style.css";

const Todo = ({ todo, onDeleteHandler, onCompleteHandler }) => {
  return (
    <div className="Todo">
        <div>
          <h2>{todo.title}</h2>
          <div>{todo.body}</div>
        </div>
      <div className="Button-set">
        <button
          onClick={() => onDeleteHandler(todo.id)}
          className="Button_delete"
        >
          삭제
        </button>
        <button
          onClick={() => onCompleteHandler(todo.id)}
          className="Button_complete"
        >
          {todo.isDone ? "취 소" : "완 료"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
