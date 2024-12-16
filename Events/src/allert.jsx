import { useState } from "react";

export function AlertClock() {
  const [data, setData] = useState(new Date());

  function time() {
    return alert(data)
  }

  return (
    <div>
      <button onClick={time}>Vedi il tempo</button>
    </div>
  );
}
