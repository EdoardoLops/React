import "./App.css";
import { Dashboard } from "./dashboard";
import { Login } from "./login";
import { Registrazione } from "./registrazione";

function App() {
  const isLogged = localStorage.getItem("isLogged");
  return (
    <div>
      <Registrazione />
      {isLogged ? <Dashboard /> : <Login />}
      <Login />
    </div>
  );
}

export default App;
