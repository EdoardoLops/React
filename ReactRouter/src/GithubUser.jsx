import React, { useEffect, useState } from "react";

export default function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [username]);

  if (!userData) {
    return <div>Caricamento...</div>;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <img src={userData.avatar_url} alt={userData.name} width="100" />
      <p>{userData.bio}</p>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        Visita Profilo
      </a>
    </div>
  );
}
