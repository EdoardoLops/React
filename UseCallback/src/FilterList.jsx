import React, { useMemo } from "react";

export function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);

  return (
    <div>
      <h3>Lista filtrata (Solo maggiorenni)</h3>
      <ul>
        {filteredList.length > 0
          ? filteredList.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong> (Age: {item.age})
              </li>
            ))
          : <p>Nessun utente maggiorenne</p> & gt}
      </ul>
    </div>
  );
}
