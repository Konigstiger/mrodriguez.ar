import React, { useState, useRef } from "react";
import { usePopper } from "react-popper";
import OutsideClickHandler from "react-outside-click-handler";

export default function NotificationDropdown() {
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
      <React.Fragment>
        <OutsideClickHandler onOutsideClick={hide}>
          <span ref={referenceRef} onClick={handleDropdownClick}>

          </span>
        </OutsideClickHandler>
        <div ref={popperRef} style={containerStyle} {...attributes.popper}>
          <OutsideClickHandler onOutsideClick={hide}>

          </OutsideClickHandler>
        </div>
      </React.Fragment>
    );
  }