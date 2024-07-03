const TodoNew = (props) => {
  const { addNewTodo } = props;

  const handleClick = () => {
    console.log('handleClick')
  }

  const handleOnChange = (value) => {
    console.log('valueChanged', value);
  }

  return (
    <div className="todo-new">
      <input type="text" onChange={(event) => handleOnChange(event.target.value)} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default TodoNew;
