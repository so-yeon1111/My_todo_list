import React from "react";
import "./style.css";
import Todo from "../todo/Todo";

const List = ({ todos, setTodos }) => {
  const onDeleteHandler = (selectedId) => {
    const remainedTodos = todos.filter((todo) => {
      return todo.id !== selectedId;
    });
    setTodos(remainedTodos);
  };

  const onCompleteHandler = (selectedId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === selectedId) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="Container">
      <h2>📃 Working 📃</h2>
      <div className="List-wrapper">
        {todos.map((todo) => {
          if (todo.isDone === false) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHandler={onDeleteHandler}
                onCompleteHandler={onCompleteHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      
      <h2>🥇 Done 🥇</h2>
      <div className="List-wrapper">
        {todos.map((todo) => {
          if (todo.isDone === true) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHandler={onDeleteHandler}
                onCompleteHandler={onCompleteHandler}
              />
            );
            } else {
              return null;
            }
        })}
      </div>
    </div>
  );
}

export default List;
