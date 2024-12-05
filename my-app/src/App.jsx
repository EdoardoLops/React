import { useState } from 'react'
import './App.css'
import { FilmButton } from './FilmButton';
import { Film } from './film';

function App() {

  const filmArray = ["Matrix", "Inception", "Titanic", "Lord of The Rings", "Star Wars"];
  
  const [preferiti, setPreferiti] = useState([])

  function AggiungiPreferiti(array) {
    if (!preferiti.includes(array)) {
      setPreferiti([...preferiti, array])
    }
  }

  function RimuoviPreferiti(array) {
    if (preferiti.includes(array)) {
      setPreferiti([...preferiti])
    }
  }
  
  return (
    <>
      <div>
        <h1>Film</h1>
        <ul>
          {filmArray.map((x, index) => (
            <Film key={index} titolo={x} stato={preferiti.includes(x)} add={AggiungiPreferiti} remove={RimuoviPreferiti} />
          ))}
        </ul>
        <h2>Preferiti</h2>
        <div>
          {preferiti.length < 0? (<ul>{preferiti.map((x, index)=> (<li key={index}>{x}</li>))}</ul>) : (<p>Aggiungi un film tra i preferiti</p>)} 
        </div>
      </div>
    </>
  )

}

export default App