import { Age } from "./Age";

export function Hello(props){
    return (
        <div>
            <p>Welcome, {props.name}!</p>
            <Age age={22} />
        </div>
    )
}