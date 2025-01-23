import "./App.css";
import { InteractiveWelcome } from "./form";
import { Login } from "./login";

function App() {
  const onLogin = (formData) => {
    console.log("Login data:", formData);
  };
  return (
    <div>
      <InteractiveWelcome />
      <Login onLogin={onLogin} />
    </div>
  );
}

export default App;
