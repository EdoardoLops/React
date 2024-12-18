import { useContext } from "react";
import { userContext } from "./userContex";

export function Dashboard({ setIsLogged }) {
  const { logout, userLogged } = useContext(userContext);

  return (
    <>
      {userLogged ? (
        <div>
          <div>
            <div>
              <span>Nome: </span>
              <span>{userLogged.nome}</span>
            </div>
            <div>
              <span>Cognome: </span>
              <span>{userLogged.cognome}</span>
            </div>
            <div>
              <span>Email: </span>
              <span>{userLogged.email}</span>
            </div>
            <div>
              <span>Nome: </span>
              <span>{userLogged.password}</span>
            </div>
          </div>
          <button onClick={logout()}>Disconettere</button>
        </div>
      ) : (
        <p>Nessun utente ha effettuato il login</p>
      )}
    </>
  );
}
