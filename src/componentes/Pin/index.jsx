import React from "react";
import "./index.css"

function Pin(props) {
    return (
      <li className="li">
        <input 
        type="checkbox"
        checked={props.hecho}
        onChange={(evt) => {
          props.modificarPins(props.id, "hecho", !props.hecho);
        }}
        /> 
        <span className={props.hecho ? "done" : ""}>
          {props.titulo}
        </span>
        <span className="secondary-text">{props.stock} </span>
      </li>
    )
  }

export default Pin;