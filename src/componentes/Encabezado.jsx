import Titulo from "./Titulo";

function Encabezado () {
    return (
        <>
        <Titulo mensaje="Martes 21 de Enero 2023"/>
        <Titulo subtitulo={true} mensaje="Inventario disponible"/>
        </>
    )
}

export default Encabezado;