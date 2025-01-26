import React, { useState } from "react";

export function Login() {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const buttonStyle = {
    backgroundColor: password.length < 8 ? "red" : "green",
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
      />
      <button style={buttonStyle}>Login</button>
    </div>
  );
}
