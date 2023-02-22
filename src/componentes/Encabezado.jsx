import Titulo from "./Titulo";
import Toogle from "./Toogle";

function Encabezado (props) {
    let fecha = new Intl.DateTimeFormat('es-MX', { dateStyle: 'full', timeZone: 'America/Mexico_City' }).format(new Date());
    fecha = fecha.charAt(0).toUpperCase() + fecha.slice(1);
    return (
        <>
        <Titulo mensaje={fecha}/>
        <Titulo subtitulo mensaje={`${props.pins.lenght} Pins`} />
        <Toogle toogle= {props.toogle} setToogle={props.setToogle} /> 
        </>
    )
}

export default Encabezado; 