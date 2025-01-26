import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Lista Github User</h2>
      <ul>
        {users.map((user) => (
          <li key={user.login}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
