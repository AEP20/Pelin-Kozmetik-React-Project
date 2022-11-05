import React, { useState } from "react";
import "./Menu.css";

function Menu({ btnState }) {
  return (
    <ul className={`nav-menu ${btnState ? "active" : ""}`}>
      <li className="nav-item">
        <a href="#anasayfa">Ana Sayfa</a>
      </li>
      <li className="nav-item">
        <a href="#hakkimizda">Hakkımızda</a>
      </li>
      <li className="nav-item">
        <a href="#urunlerimiz">Ürünlerimiz</a>
      </li>
      <li className="nav-item">
        <a href="#iletisim">İletişim</a>
      </li>
    </ul>
  );
}

export default Menu;
