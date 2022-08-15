import React, {useState} from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

function TodoList() {  

const [todos, setTodos] = useState([
  {
    id: 1,
    title: "My Todo List 완성하기",
    body: "야호~!",
    isDone: false,
  },
  {
    id: 2,
    title: "팀 과제 ",
    body: "6조 파이팅~!",
    isDone: true,
  },
]);

return (
  <Layout>
    <Header />
    <Form todos={todos} setTodos={setTodos} />
    <List todos={todos} setTodos={setTodos} />
  </Layout>
);
}

export default TodoList;
