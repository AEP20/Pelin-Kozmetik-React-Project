import React from "react";
import "./TrustUs.css";
import iso from "./iso.svg";
import gmp from "./gmp.png";


function TrustUs() {
  return (
    <div className="trust-us-dom-container">
      <div className="trust-us-container">
        <div className="gmp-container">
          <img src={gmp}></img>
        </div>
        <div className="trust-us-p-container">
            <h1>İşletmenizin Sırdaşı</h1>
            <p>GMP ve İSO belgelerimiz ve yüzlerce memnun müşterimizin de söylediği gibi Pelin Kozmetik içerik tariflerini gizli tutar, üretim ve teslimat sona erdikten sonra her şeyi ortadan kaldırır.</p></div>
        <div className="iso-container">
          <img src={iso}></img>
        </div>
      </div>
    </div>
  );
}

export default TrustUs;
