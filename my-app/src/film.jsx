

export function Film(props) {
    return (
        <>
            <li>
            {props.titolo}
            {props.stato ? (
            <button onClick={props.remove}>Rimuovi dai preferiti</button>
            ) : (
            <button onClick={props.add}>Aggiungi ai preferiti</button>
            )}
        </li>
        </>
      
    )
}