import { useState } from "react";

export function Login({onLogin}) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleLogin(event){
    event.preventDefault(); 
    onLogin(formData);
  }

  function handleReset(){
    setFormData({
      username: "",
      password: "",
      remember: false,
    });
  }

  const isLoginDisabled = formData.username === "" || formData.password === "";

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" value={formData.username} onChange={handleChange} />
        <input
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          checked={formData.remember}
          onChange={handleChange}
        />
      </form>
      <button type="submit" disabled={isLoginDisabled} onClick={onLogin}>
        login
      </button>
      <button type="button" onClick={handleReset}>
        reset
      </button>
    </div>
  );
}
