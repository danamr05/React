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
            key={elemento.id}
            ponerPins={props.ponerPins}
            {...elemento}
            />
        );
      })
    }
    </ul>
  )
}

Pins.propTypes = {
  ponerPins: PropTypes.func.isRequired,
  pins: PropTypes.arrayOf(PinType).isRequired,
};

export default Pins;
