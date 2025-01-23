import { useEffect } from "react";
import { useState } from "react";

export function Counter({num}){
    const [count, setCount] = useState(num)

    function increment(){
        setCount((a) => a + num)
    }

    useEffect(() => {
        console.log(count);
    }, [count])

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>Aumenta</button>
        </div>
    )
}