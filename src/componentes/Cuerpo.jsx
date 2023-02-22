import PropTypes from "prop-types";
import { PinType } from "../prop-types";
import Pins from "./Pins";

function Cuerpo(props) {
    return (
        <main>
            <Pins {...props} />
        </main>
    )
};

Cuerpo.propTypes = {
    modificarPins: PropTypes.func.isRequired,
    pins: PropTypes.arrayOf(PinType).isRequired,
};

export default Cuerpo;