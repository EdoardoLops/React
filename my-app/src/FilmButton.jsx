export function FilmButton(props) {
    return (
        <>
            <button onClick={props.handle}>{props.label}</button>
        </>
    )
}