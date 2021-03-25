// esto es lo que tiene problemas
// copiar el contenido de los files de esta carpeta
// equivalentes en su .js, para que tenga la 
// misma estructura y DOM que es requerida por otros
// componentes.

// El codigo que está acá es un template que deberia andar
// pero que tomé en mi impaciencia de testear todo integrado.
// Espero que este Framework me sirve y se vea cool.

import React, { useState, useRef, ReactElement } from "react";
import { usePopper } from "react-popper";
import OutsideClickHandler from "react-outside-click-handler";

import Button from '@material-ui/core/Button';

function TheButton(props) : ReactElement | any {
  return <Button id="theButton" key="theButton" type="button" {...props}>The Button</Button>;
}

export default function TableDropdown({ button: Button = TheButton, children }) {
  const [visible, setVisible] = useState(false);
  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: "bottom",
      modifiers: [
        {
          name: "offset",
          enabled: true,
          options: {
            offset: [0, 10],
          },
        },
      ],
    }
  );

  const hide = () => setVisible(false);

  function handleDropdownClick(e: any) {
    e.preventDefault();
    setVisible(true);
  }

  const containerStyle: any = {
    ...styles.popper,
    display: visible ? "flex" : "none",
    zIndex: 999,
    flexDirection: "column",
    backgroundColor: "#FFF",
    borderRadius: "4px",
    boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.14)",
    padding: "10px",
  };



    return (
      <div>
      <React.Fragment>
        <OutsideClickHandler onOutsideClick={hide}>
          <span ref={referenceRef} onClick={handleDropdownClick}>
            <Button />
          </span>
        </OutsideClickHandler>
        <div ref={popperRef} style={containerStyle} {...attributes.popper}>
          <OutsideClickHandler onOutsideClick={hide}>
            {children}
          </OutsideClickHandler>
        </div>
      </React.Fragment>
      <div>
      </div>
      </div>
    );
  }