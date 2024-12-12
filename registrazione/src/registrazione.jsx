import { useRef, useState } from "react";

export function Registrazione() {
  const [data, setData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });
  
  const handleChange = (event) => {
    const {name, value} = event.target
    setData((prevdata) => ({ ...prevdata,[name]:value}));
  }

  const handleSubmit = (event) => {
  event.preventDefault();
  
  }

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
          value={data.nome}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleChange}
          value={data.nome}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={handleChange}
          value={data.nome}
        />
      </form>
    </div>
  );
}
