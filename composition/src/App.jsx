import React, { useContext } from "react";
import { LanguageProvider, LanguageContext } from "./LanguageContext";
import Hello from "./Hello";

function App() {
  const { setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <LanguageProvider>
      <div>
        <h1>Choose a Language</h1>
        <select onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>

        <Hello />
      </div>
    </LanguageProvider>
  );
}

export default App;
