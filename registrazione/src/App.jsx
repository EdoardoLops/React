import "./App.css";
import { Dashboard } from "./dashboard";
import { Fakeusers } from "./fakedatabase";
import { Login } from "./login";
import { Registrazione } from "./registrazione";
import { UserProvider } from "./userContex";

function App() {
  return (
    <div>
      <Fakeusers />
      <UserProvider>
        <Registrazione />
        <Login />
        <Dashboard />
      </UserProvider>
    </div>
  );
}

export default App;
