import React, { useState } from "react";
import GithubUser from "./GithubUser";

export function GithubUsers() {
  const [username, setUsername] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      setSearchResults([username]);
    }
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <h1>Search GitHub Users</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Inserire GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {searchResults.length > 0 ? (
          searchResults.map((user) => (
            <div key={user}>
              <GithubUser username={user} />
            </div>
          ))
        ) : (
          <p>Nessun utente cercato</p>
        )}
      </div>
    </div>
  );
}
