import React from "react";
import "./App.css";
import Cuerpo from "./componentes/Cuerpo";
import Encabezado from "./componentes/Encabezado";

const pinsIniciales = [  
    {
      titulo: "La noche estrellada",
      hecho: true,
    },
    {
      titulo: "Zero The Night Before Christmas",
      hecho: false,
    },
    {
      titulo: "Calcifer",
      hecho: false,
    },
];


  function App() {
    const [pins] = React.useState(pinsIniciales);

  return (
    <>
    <Encabezado pins={pins} />
    <Cuerpo pins={pins} />
    </>
  );
}

export default App;
