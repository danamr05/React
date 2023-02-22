import React from "react";
import "./componentes/Pin/index.css";
import Cuerpo from "./componentes/Cuerpo";
import Encabezado from "./componentes/Encabezado";

const pinsIniciales = [  
    {
      titulo: "La noche estrellada",
      hecho: true,
      stock: "NO DISPONIBLE",
    },
    {
      titulo: "Zero The Night Before Christmas",
      hecho: false,
      stock: "DISPONIBLE",
    },
    {
      titulo: "Calcifer",
      hecho: false,
      stock: "DISPONIBLE",
    },
];

  function App() {
    const [pins, ponerPins] = React.useState(pinsIniciales);
    const modificarPins = (id, propiedad, valor) => {
      const copiaPins = [...pins];
      copiaPins[id][propiedad]= valor;
      ponerPins(copiaPins); 
    }; 

  return (
    <>
    <Encabezado pins={pins} />
    <Cuerpo pins={pins} modificarPins={modificarPins} />
    </>
  );
}

export default App;
