import './App.css'
import { Clock } from './Clock'
import { Counter } from './Counter'


function App() {
return (
    <div>
        <Counter num={2} />
        <Clock />
    </div>
)
}

export default App