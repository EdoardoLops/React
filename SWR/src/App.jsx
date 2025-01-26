// App.jsx
import React, { useState } from "react";
import { SWRConfig } from "swr";
import { GithubUser } from "./GithubUser";

function App() {
  const [username, setUsername] = useState(""); 

  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then((res) => res.json()), 
      }}
    >
      <div>
        <h1>GitHub User Info</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Enter GitHub username"
        />
        <GithubUser username={username} />
      </div>
    </SWRConfig>
  );
}

export default App;
