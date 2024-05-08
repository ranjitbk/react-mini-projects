import React from "react";
import { useState } from "react";
import "./todo.scss";

function TodoList(props) {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValues] = useState("");

  const handleInputChange = (e) => {
    setInputValues(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValues("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
  };

  const handleDeleteTodos = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add Todo</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodos(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
