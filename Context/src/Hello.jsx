import React, { useContext } from "react";
import { LanguageContext } from "./languageContext";

export function Hello() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <div>
      <h2>{translations[language]}</h2>
    </div>
  );
}
