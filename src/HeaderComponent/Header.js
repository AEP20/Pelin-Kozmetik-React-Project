import React, { useState } from "react";
import "./Header.css";
import Button from "./Button";
import Menu from "./Menu";

function Header() {

    const [btnState, setBtnState] = useState(false);

    return (
        <div className="container">
          <header>
            <nav className="navbar">
              <a>
                <img src="./img/PelinLogo.svg" className="nav-branding"></img>
              </a>
              <Menu btnState={btnState}></Menu>
              <Button setBtnState={setBtnState} btnState={btnState}></Button>
            </nav>
          </header>
        </div>
      );
}

export default Header