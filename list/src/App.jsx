import "./App.css";
import { Colors } from "./colors";
import { Color } from "./list";

function App() {
  const colore = [{ id: 1, name: "rosso" }];
  const colori = [
    { id: 1, name: "rosso" },
    { id: 2, name: "verde" },
    { id: 3, name: "giallo" },
  ];

  return (
    <div>
      <ol>
        {colore.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </ol>
      <ul>
        {colori.map((color) => (
          <Colors key={color.id} color={color} />
        ))}
      </ul>
    </div>
  );
}

export default App;
