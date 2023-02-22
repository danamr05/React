import React from "react";
import "./componentes/Pin/index.css";
import Cuerpo from "./componentes/Cuerpo";
import Encabezado from "./componentes/Encabezado";

const pinsIniciales = [  
    {
      titulo: "La noche estrellada",
      hecho: true,
      stock: "45 DISPONIBLE",
    },
    {
      titulo: "Zero The Night Before Christmas",
      hecho: false,
      stock: "7 DISPONIBLE",
    },
    {
      titulo: "Calcifer",
      hecho: false,
      stock: "10 DISPONIBLE",
    },
];


const reductorPins = (estado, accion) => {
  const nuevoEstado = [...estado];

  switch(accion.tipo) {
    case "ponerHecho":
      nuevoEstado[accion.id].hecho =true;
      return nuevoEstado;
    case "quitarHecho":
      nuevoEstado[accion.id].hecho =false;
      return nuevoEstado;
      default: throw new Error(`Acción desconocida: ${accion.tipo}`)
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
    // true sirve para el tema LIGHT
    // false para DARK
    const [pins, ponerPins] = React.useReducer(reductorPins, pinsIniciales);
// const [toggle, setToggle] = React.useState("light");
const [toogle, setToogle] = React.useReducer(reductor, estadoInicial);

    //const modificarPins = (id, propiedad, valor) => {
     //const copiaPins = [...pins];
      //copiaPins[id][propiedad]= valor;
      //ponerPins(copiaPins); 
    //}; 
 
  return (
    <div className={`wrapper ${toogle ? "" : "dark"}`}>
    <Encabezado pins={pins} toogle={toogle} setToogle={setToogle} />
    <Cuerpo pins={pins} ponerPins={ponerPins} />
    </div>
  );
}

export default App;
