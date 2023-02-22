import PropTypes from "prop-types";
import { PinType } from "../prop-types";
import Titulo from "./Titulo";
import Toogle from "./Toogle";

function Encabezado(props) {
  // fecha = miércoles, 25 de enero de 2023
  let fecha = new Intl.DateTimeFormat('es-MX', { dateStyle: 'full', timeZone: 'America/Mexico_City' }).format(new Date());
  // fecha = Miércoles, 25 de enero de 2023
  fecha = fecha.charAt(0).toUpperCase() + fecha.slice(1);

  return (
    <>
      <Titulo mensaje={fecha} />
      <Titulo subtitulo mensaje={`${props.pins.length} pins`} />
      <Toogle toogle={props.toogle} setToogle={props.setToogle} />
    </>
  )
};

Encabezado.propTypes = {
  toogle: PropTypes.string.isRequired,
  setToogle: PropTypes.func.isRequired,
  pins: PropTypes.arrayOf(PinType).isRequired,
};

export default Encabezado;