/** @format */
import React, { useState } from "react";
import Form from "./components/form";
import Header from "./components/header";
import List from "./components/list";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header />

      <Form setTodo={setTodos} len={todos.length} />

      <List todoList={todos} setTodo={setTodos} />
    </div>
  );
}

export default App;
