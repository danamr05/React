import PropTypes from "prop-types";
import "./index.css"
import Pin from "../Pin";
import { PinType } from "../../prop-types";

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

Pins.propTypes = {
  modificarPin: PropTypes.func.isRequired,
  pins: PropTypes.arrayOf(PinType).isRequired,
};

export default Pins;
