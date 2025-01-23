import { useState } from "react";
import { CounterDisplay } from "./display";

export function Counter({ num }) {
  const [counter, setCounter] = useState(num);

  function aumentoCounter() {
    setCounter((a) => a + num);
  }

  function diminuendoCounter() {
    setCounter((a) => a - num);
  }

  function resetCounter() {
    setCounter(num);
  }

  return (
    <div>
      <CounterDisplay valore={counter} />
      <button onClick={aumentoCounter}>Aumenta</button>
      <button onClick={diminuendoCounter}>Dimiunisci</button>
      <button onClick={resetCounter}>Resetta</button>
    </div>
  );
}
