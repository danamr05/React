import React from "react";
import "./componentes/Pin/index.css";
import Cuerpo from "./componentes/Cuerpo";
import Encabezado from "./componentes/Encabezado";
import { baseURL } from "./constantes";


const reductorPins = (estado, accion) => {
  const nuevoEstado = [...estado];
  const indice = estado.findIndex(elemento => elemento.id === accion.id);

  switch(accion.tipo) {
    case "ponerHecho":
      nuevoEstado[indice].hecho =true;
      return nuevoEstado;
    case "quitarHecho":
      nuevoEstado[indice].hecho =false;
      return nuevoEstado;
    case "ponerPins":
      return accion.pins;
    case "borrarPins":
      return estado.filter(pin => pin.id !== accion.id);
      default: throw new Error(`Acción desconocida: ${accion.tipo}`);
  }
};

const estadoInicial = "light";
const calcularSiguienteEstado = (estado) => {
  switch (estado) {
      case "light":
          return "medium";
      case "medium":
          return "dark";
      case "dark":
          return "light";
      default:
          return "";
  }
};
const calcularPrevioEstado = (estado) => {
  switch (estado) {
      case "light":
          return "dark";
      case "medium":
          return "light";
      case "dark":
          return "medium";
      default:
          return "";
  }
};
const reductor = (estado, accion) => {
  switch(accion.tipo) {
    case "siguiente":
      return calcularSiguienteEstado(estado);
    case "previo":
      return calcularPrevioEstado(estado);
    default:
      throw new Error(`Acción desconocida: ${accion.tipo}`)
  }
};

  function App() {
    //const [pins, ponerPins] = React.useState(pinsIniciales);
    const [pins, ponerPins] = React.useReducer(reductorPins, []);
    const [toogle, setToogle] = React.useReducer(reductor, estadoInicial);

    React.useEffect(function(){
      fetch(`${baseURL}/pins`) 
      .then((response) => response.json())
      .then((pins) => ponerPins({tipo: "ponerPins", pins}));
    }, [])
 
  return (
    <div className={`wrapper ${toogle}`}>
    <Encabezado pins={pins} toogle={toogle} setToogle={setToogle} />
    <Cuerpo pins={pins} ponerPins={ponerPins} />
    </div>
  );
}

export default App;
