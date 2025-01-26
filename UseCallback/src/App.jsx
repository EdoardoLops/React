import { FilteredList } from "./FilterList";
import { useCounter } from "./UseCounter";

function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 17 },
    { id: 3, name: "Charlie", age: 19 },
    { id: 4, name: "Dave", age: 16 },
    { id: 5, name: "Eve", age: 22 },
  ];

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <p>Current Count: {count}</p>
        <button onClick={increment}>Incrementa</button>
        <button onClick={decrement}>Diminuisce</button>
        <button onClick={reset}>Resetta</button>
      </div>

      <hr />

      <FilteredList list={users} />
    </div>
  );
}

export default App;
