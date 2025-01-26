import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("it");

  const translations = {
    it: "Ciao, Mondo!",
    en: "Hello, World!",
    es: "¡Hola, Mundo!",
    fr: "Bonjour le Monde!",
    de: "Hallo, Welt!",
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
