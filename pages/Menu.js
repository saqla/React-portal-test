import React, { useState } from "react";
import Dialog from "./Dialog";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
			isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <div className="menu">
      <button onClick={handleClick}>show dialog</button>
      {isOpen && <Dialog />}
    </div>
  );
};

export default Menu;