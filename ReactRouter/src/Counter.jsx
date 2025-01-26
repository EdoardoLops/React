import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Umentare</button>
      <button onClick={() => setCount(count - 1)}>Diminuire</button>
      <button onClick={() => setCount(0)}>Resettare</button>
    </div>
  );
}
