import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";

import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: " Learning Js" },
    { id: 2, name: " Learning Java" },
  ]);

  const addNewTodo = () => {
    console.log("Add new todo");
  };
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        <TodoData todoList={todoList} />
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      </div>
    </>
  );
};

export default App;
