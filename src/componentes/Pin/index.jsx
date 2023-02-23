import React from "react";
import PropTypes from "prop-types";

import { Pin as PinShape } from "../../prop-types";
import "./index.css"
import { baseURL } from "../../constantes";

function Pin(props) {
    const classNameHecho = props.hecho ? "done" : "";

    //React.useEffect(function() {
      //fetch(`${baseURL}/pins/${props.id}`, { method: "DELETE"})
      //.then( ())
    //}, []);

    return (
      <li className="li">
        <input 
          type="checkbox"
          checked={props.hecho}
          onChange={() => {
            fetch (`${baseURL}/pins/${props.id}`, 
            {
              method: "PATCH",
              headers: {
                'Content-Type':"application/json"
              },
              body:JSON.stringify({hecho: !props.hecho})
            }
            )
            .then(response => response.json ())
            .then(pin=> {
            props.ponerPins({tipo: pin.hecho ? "quitarHecho" : "ponerHecho" , id: props.id });
          })
          }}
        />
        <span
          className={classNameHecho}
        >
          {props.titulo}
        </span>
        <span className={`secondary-text ${classNameHecho}`}>{props.stock}</span>
        <span 
        className= "close"
        onClick={() => {
          fetch(`${baseURL}/pins/${props.id}`, { method: "DELETE"})
          .then(() => {
          props.ponerPins({ tipo: "borrarPins", id:props.id})
          })
        }}
        >X</span>
      </li>
    )
  }

  Pin.propTypes = {...PinShape, ponerPins: PropTypes.func.isRequired };

export default Pin;