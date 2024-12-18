import { useContext, useState } from "react";
import { userContext } from "./userContex";

export function Login({ setIsLogged }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [messaggio, setMessaggio] = useState("");
  const {login} = useContext(userContext)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevdata) => ({ ...prevdata, [name]: value }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const users = localStorage.getItem("users");
    const parseUsers = JSON.parse(users);
    const userExist = parseUsers.find(
      (x) => x.email === data.email && x.password === data.password
    );
    if (userExist) {
      setMessaggio("Login effettuato con successo");
      login(userExist)
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
