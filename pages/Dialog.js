import React from "react";
import ReactDOM from "react-dom";
import SetHouse from "./SetHouse";

const Dialog = () => {
  return ReactDOM.createPortal(
    <SetHouse />,
    document.getElementById("dialog")
  );
};

export default Dialog