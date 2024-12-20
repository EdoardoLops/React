import { useState } from "react";

function useGithubUser() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchUser(username) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(`Error: ${err.message}`);
      }
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return { data, error, loading, onFetchUser: fetchUser };
}

export function GithubUser({ username }) {
  const { data, loading, error, onFetchUser } = useGithubUser(username);

  function handleGetUserData() {
    onFetchUser(username)
    console.log(username);
    
  };

  return (
    <div>
      <button onClick={handleGetUserData}>Load user data</button>
      {loading && <h1>Loading..,</h1>}
      {error && <h1>There has been an error</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
