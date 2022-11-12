import React, { useState } from "react";
import "./Header.css";
import Button from "./Button";
import Menu from "./Menu";
import PelinLogo from './PelinLogo.svg';
import {Link} from 'react-scroll';



function Header() {

    const [btnState, setBtnState] = useState(false);

    return (
        <div className="container">
          <header>
            <nav className="navbar">
              <Link to="anasayfa" spy={true} smooth={true} offset={-30} duration={500}>
                <img src={PelinLogo} alt="Pelin Kozmetik Logo" className="nav-branding"></img>
              </Link>
              <Menu btnState={btnState}></Menu>
              <Button setBtnState={setBtnState} btnState={btnState}></Button>
            </nav>
          </header>
        </div>
      );
}

export default Header