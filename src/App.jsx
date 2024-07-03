import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";

const App = () => {
  const data = {
    address: "Da Nang",
    country: "Viet Nam",
  };

  const addNewTodo = () => {
    console.log("Add new todo");
  };
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew data={data} addNewTodo={addNewTodo} />
        <TodoData />
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      </div>
    </>
  );
};

export default App;
