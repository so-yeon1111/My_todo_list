import React, {useState} from "react";
import "./style.css";

let number = 3;

const Form = ({todos, setTodos}) => {
  
  const initialState = { id: 0, title: "", body: "", isDone: false };

  const [inputTodo, setInputTodo] = useState(initialState);


  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputTodo({ ...inputTodo, [name]: value })
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, {...inputTodo, id:number }]);
    setInputTodo(initialState);
    number++;
  };

  return (

    <form onSubmit={onSubmitHandler} className="Add-form">
      <div className="Input-group">
        <label>제목</label>
        <input
          type="text"
          name="title"
          onChange={onChangeHandler}
          value={inputTodo.title}
          required
        />
        <label>내용</label>
        <input
          type="text"
          name="body"
          onChange={onChangeHandler}
          value={inputTodo.body}
        />
      </div>
      <button className="Add-button">추가하기</button>
    </form>
  );
};

export default Form;
