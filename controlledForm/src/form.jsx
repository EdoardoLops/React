import React, { useState } from "react";
import { Welcome } from "./welcome";

export function InteractiveWelcome() {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <Welcome name={name} />
    </div>
  );
}
