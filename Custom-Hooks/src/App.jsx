import { useState } from "react";
import "./App.css";
import { LoginForm } from "./form";
import { HookCounter } from "./useCounter ";
import { GithubUser } from "./useGithubUser";

function App() {
  const [username, setUsername] = useState("")
  return (
    <div>
      {/* <HookCounter />
      <LoginForm /> */}
      <input value={username} onChange={e => setUsername(e.target.value)}/>
      <GithubUser/>
    </div>
  );
}

export default App;
