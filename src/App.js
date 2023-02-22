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

  function App() {
    const [pins, ponerPins] = React.useState(pinsIniciales);
    // true sirve para el tema LIGHT
    // false para DARK
    const [toogle, setToogle] = React.useState (true);
    const modificarPins = (id, propiedad, valor) => {
      const copiaPins = [...pins];
      copiaPins[id][propiedad]= valor;
      ponerPins(copiaPins); 
    }; 
 
  return (
    <div className={`wrapper ${toogle ? "" : "dark"}`}>
    <Encabezado pins={pins} toogle={toogle} setToogle={setToogle} />
    <Cuerpo pins={pins} modificarPins={modificarPins} />
    </div>
  );
}

export default App;
