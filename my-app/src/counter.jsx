import { useState } from "react";


export function Counter(props) {
    const [counter, setCounter] = useState(props.initvalue)

    function IncrementTimer() {
      setCounter((c) => c + props.increment)
      
    }

    function DecreaseTimer() {
      setCounter((c) => c - props.increment)
    }

    function Reset() {
        setCounter(props.initvalue)
    }

    return (
      <div>
        <CounterDisplay  count={counter}/>
        <button onClick={IncrementTimer}>Aumenta il Counter</button>
        <button onClick={DecreaseTimer}>Diminuisi il Counter</button>
        <button onClick={Reset}>Resetta il counter</button>
      </div>
    );
}

function CounterDisplay({count}) {
    return <h2>Counter: {count}</h2>;
}