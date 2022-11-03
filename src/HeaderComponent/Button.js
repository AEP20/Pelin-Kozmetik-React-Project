import { useState } from "react";
import "./Button.css";

function Button({ setBtnState, btnState }) {
  function hamburger() {
    setBtnState((btnState) => !btnState);
  }

  return (
    <div
      className={`hamburger ${btnState ? "active" : ""}`}
      onClick={hamburger}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}

export default Button;
