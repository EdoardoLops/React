import { useRef, useState } from "react";

export function Registrazione() {
  const [data, setData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "password") {
      if (
        value.length < 6 ||
        !/\d/.test(value) ||
        !/[!@#$%^&*()]/.test(value)
      ) {
        setError(
          "La password deve essere di almeno 6 caratteri, di cuoi almeno un numero e un carattere speciale"
        );
      } else {
        setError("");
      }
    }

    setData((prevdata) => ({ ...prevdata, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (error) return;
    const existData = localStorage.getItem("users");
    let utentiRegistrati = [];

    // verifica se esiste l'array vuoto
    if (existData) {
      utentiRegistrati = JSON.parse(existData);
    }

    // verifica se l'email esiste o no
    const existEmail = utentiRegistrati.some((x) => x.email === data.email);

    // verifica se l'email non esiste
    if (existEmail) {
      setErrorEmail("Email già registrata");
      return;
    }

    utentiRegistrati.push(data);
    localStorage.setItem("users", JSON.stringify(utentiRegistrati));
    setData({
      nome: "",
      cognome: "",
      email: "",
      password: "",
    });
    console.log("hai cliccato submit");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          name="nome"
          id="nome"
          onChange={handleChange}
          value={data.nome}
        />
        <label htmlFor="cognome">Cognome:</label>
        <input
          type="text"
          name="cognome"
          id="cognome"
          onChange={handleChange}
          value={data.cognome}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleChange}
          value={data.email}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={handleChange}
          value={data.password}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" disabled={!!error}>
          Registrati
        </button>
        {errorEmail && <p style={{ color: "red" }}>{errorEmail}</p>}
      </form>
    </div>
  );
}
