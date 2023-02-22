import PropTypes from "prop-types";

const Pin = {
    titulo: PropTypes.string.isRequired,
    hecho: PropTypes.bool.isRequired,
    stock: PropTypes.string.isRequired,
    detalles: PropTypes.array,
};

const PinType = PropTypes.shape(Pin);

export {
    Pin,
    PinType,
};