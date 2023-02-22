import React from "react";
import PropTypes from "prop-types";

import { Pin as PinShape } from "../../prop-types";
import "./index.css"

function Pin(props) {
    const classNameHecho = props.hecho ? "done" : "";

    return (
      <li className="li">
        <input 
          type="checkbox"
          checked={props.hecho}
          onChange={(evt) => {
            props.ponerPins({tipo: props.hecho ? "quitarHecho" : "ponerHecho" , id: props.id });
          }}
        />
        <span
          className={classNameHecho}
          draggable
          onDragStart={e => console.log('onDragStart')}
          onDragEnd={e => console.log('onDragEnd')}
        >
          {props.titulo}
        </span>
        <span className={`secondary-text ${classNameHecho}`}>{props.hora}</span>
      </li>
    )
  }

  Pin.propTypes = {...PinShape, ponerPins: PropTypes.func.isRequired };

export default Pin;