import React, { useState } from "react";
import "./Header.css";
import Button from "./Button";
import Menu from "./Menu";
import PelinLogo from './PelinLogo.svg';
import {Link} from 'react-scroll';



function Header() {

    const [btnState, setBtnState] = useState(false);

    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

    return (
        <div className="container" >
          <header>
            <nav className="navbar" id="navbar">
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