import { Age } from "./age";


export function Welcome({ nome, age }) {
  return (
    <div>
      <p>Welcome {nome}</p>
      {age > 17 ? <Age age={age} /> : <p>Non sei maggiorenne</p>}
      {age ? <Age age={age} /> : <p>L'età non è presente</p>}
      {age > 17 && age < 65 ? (
        <Age age={age} />
      ) : (
        <p>Non sei dell'età giusta</p>
      )}
      {age > 17 && nome === "John" ? (
        <Age age={age} />
      ) : (
        <p>You are not John</p>
      )}
      <Age age={age} />
    </div>
  );
}

