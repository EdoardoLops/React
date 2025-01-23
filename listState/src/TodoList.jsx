import { useState } from "react";

export function ToDoList() {
  const [todos, setTodos] = useState(["Spesa", "Lavare la macchina"]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo !== "") {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo("");
    }
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handlereset = () => {
    setTodos([]);
  };

  const removeTodo = (todoToRemove) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo !== todoToRemove));
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() =>removeTodo(todo)}>Rimuovi</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Aggiungi un nuovo todo"
      />
      <button onClick={handleAddTodo}>Aggiungi Todo</button>
      <button onClick={handlereset}>Resetta</button>
    </div>
  );
}
