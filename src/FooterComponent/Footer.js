import React from "react";
import "./FooterAnimation.css";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-sub-container">
        <div
          className="wave wave1"
          style={{ backgroundImage: "url(/img/wave.png)" }}
        ></div>
        <div className="footer-bottom-container">
          <div className="footer-left-container">
            <div className="footer-left-img-container">
              <img src="./img/PelinLogo.svg"></img>
            </div>
            <div className="footer-left-container-p">
              <p>
                Pelin kozmetik uzun yıllar deneyimleri sonucu üretim
                tesislerinde kendi markaları için üretim yapmak isteyen zincir
                mağazaları için onların markası ile fason kozmetik üretimi ve
                kozmetik fason dolum hizmetleri vermektedir.
              </p>
            </div>
          </div>

          <div className="footer-right-container">
            <div className="logo-text-container">
              <div className="footer-logo-container">
                <img src="./img/mail.svg"></img>
              </div>
              <div className="footer-text-container">
                <p>info@pelinkozmetik.com.tr</p>
              </div>
            </div>

            <div className="logo-text-container">
              <div className="footer-logo-container">
                <img src="./img/phone.svg"></img>
              </div>
              <div className="footer-text-container">
                <p>+90 216 378 60 22 - 23</p>
              </div>
            </div>

            <div className="logo-text-container">
              <div className="footer-logo-container">
                <img src="./img/location.svg"></img>
              </div>
              <div className="footer-text-container">
                <p>
                  Sanayi Mah. Akçiçek Sok. No: 4/2 Kurtköy / Pendik - İSTANBUL
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rights-container"><p>© KDY Pelin Kozmetik. All Rights Reserved.</p></div>
      </div>
    </div>
  );
}

export default Footer;

/*

*/
