import Pin from "./Pin";

function Pins (props) {
  return (
    <ul>
      {
        props.pins.map((elemento, indice) => {
          return (
            <Pin
            key={indice}
            hecho={elemento.hecho}
            titulo={elemento.titulo}
            />
        );
      })
    }
    </ul>
  )
}

export default Pins;
