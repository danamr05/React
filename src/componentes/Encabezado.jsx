import Titulo from "./Titulo";

function Encabezado (props) {
    return (
        <>
        <Titulo mensaje="Martes 21 de Enero 2023"/>
        <Titulo subtitulo mensaje={`${props.pins.lenght} Pins`} />
        </>
    )
}

export default Encabezado;