import PropTypes from "prop-types"

const Footer = props => <footer>La Ruta del Pin</footer>

Footer.protoTypes = {
    mensaje: PropTypes.string.isRequired,
    fecha: PropTypes.instanceOf(Date).isRequired,
}

