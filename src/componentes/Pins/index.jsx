import "./index.css"
import Pin from "../Pin";

function Pins (props) {
  return (
    <ul className="no-bullets">
      {
        props.pins.map((elemento, indice) => {
          return (
            <Pin
            key={indice}
            modificarPins={props.modificarPins}
            id={indice}
            hecho={elemento.hecho}
            titulo={elemento.titulo}
            stock={elemento.stock}
            />
        );
      })
    }
    </ul>
  )
}

export default Pins;
