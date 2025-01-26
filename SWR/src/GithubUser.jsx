import React from "react";
import useGithubUser from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, isLoading, error, refetch } = useGithubUser(username);

  const handleGetUserData = () => {
    refetch();
  };

  return (
    <div>
      <button onClick={handleGetUserData}>cerca user</button>

      {isLoading && <h1>nessuna richiesta</h1>}
      {error && <h1>{error}</h1>}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <img src={data.avatar_url} alt={data.name} width="100" />
          <p>{data.bio}</p>
          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
            Visita Profilo
          </a>
        </div>
      )}
    </div>
  );
}
