import { Age } from "./Age";
import { Message } from "./message";

export function Welcome({name, age}){
    return (
      <div>
        <p>Welcome, {name}!</p>
        {age > 18 ? <Age age="22" /> : <Message />}
        {age ? <Age age="22" /> : <Message />}
        {age > 18 && age < 65 ? <Age age="22" /> : <Message />}
        {age > 18 && name === "Jhon" ? <Age age="22" /> : <Message />}
        {age > 18 ? <Age age="22" /> : <Message />}
      </div>
    );
}