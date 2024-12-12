

export function Semaforo(props) {

    const styling = (colore) => ({
      borderRadius: "50px",
      width: "20px",
      height: "20px",
      backgroundColor: colore,
      opacity: props.colore === colore? 1 : 0.5
    });

    return (
      <div style={{ backgroundColor: "gray", padding:"20px"}}>
        <div
          style={styling("red")}
        ></div>
        <div
          style={styling("yellow")}
        ></div>
        <div
          style={styling("green")}
        ></div>
      </div>
    );
}