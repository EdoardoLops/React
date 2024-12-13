import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [messaggio, setMessaggio] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevdata) => ({ ...prevdata, [name]: value }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const users = localStorage.getItem("users");
    const parseUsers = JSON.parse(users);
    const userExist = parseUsers.some(
      (x) => x.email === data.email && x.password === data.password
    );
    if (userExist) {
      setMessaggio("Login effettuato con successo");
      const isLogged = localStorage.setItem("isLogged", true);
    } else {
      setMessaggio("Credenziali errate");
    }
  };

  

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={handleChange}></input>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">Login</button>
        {messaggio && <p style={{ color: "red" }}>{messaggio}</p>}
      </form>
    </div>
  );
}
