import { useEffect, useState } from 'react'
import './App.css'
import { Semaforo } from './semaforo'

function App() {

    const [coloreAttuale, setColoreAttuale] = useState("red")
    useEffect(() => {const interval = setInterval(()=> console.log("qulacosa"), 1000)
    return ()=> {clearInterval(interval)}}, [])

    function cambiaColore(){
        if (coloreAttuale === "red"){
            setColoreAttuale("yellow")
        } else if (coloreAttuale === "yellow"){
            setColoreAttuale("green")
        } else {
            setColoreAttuale("red")
        }
    }

return(
    <div>
        <button onClick={cambiaColore}>Per cambiare colore</button>
        <Semaforo colore={coloreAttuale} />
    </div>
    
) 

}

export default App