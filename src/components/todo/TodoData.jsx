const TodoData = (props) => {
  const { todoList } = props;

  return (
    <div className="todo-data">
      <div> Learning React </div>
      <div> Watching Youtube</div>
      { todoList && todoList.length > 0 && 
          todoList.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))
      }
    </div>
  );
};

export default TodoData;
