import React, { useState } from "react";
import "./Menu.css";
import {Link} from 'react-scroll';

function Menu({ btnState }) {
  return (
    <ul className={`nav-menu ${btnState ? "active" : ""}`}>
      <li className="nav-item">
        <Link to="anasayfa" spy={true} smooth={true} offset={-50} duration={500}>Ana Sayfa</Link>
      </li>
      <li className="nav-item">
        <Link to="hakkimizda" spy={true} smooth={true} offset={-50} duration={500}>Hakkımızda</Link>
      </li>
      <li className="nav-item">
        <Link to="urunlerimiz" spy={true} smooth={true} offset={-100} duration={500}>Ürünlerimiz</Link>
      </li>
      <li className="nav-item">
        <Link to="iletisim" spy={true} smooth={true} offset={-30} duration={500}>İletişim</Link>
      </li>
    </ul>
  );
}

export default Menu;
