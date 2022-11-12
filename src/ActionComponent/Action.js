import React from "react";
import "./ActionBottom.css";
import "./ActionUpper.css";
import ref1 from "./A101.png";
import ref2 from "./EnglishHome.png";
import ref3 from "./Eve.png";
import ref4 from "./FDPlantix.png";
import ref5 from "./Jeunesse.png";
import ref6 from "./marieClaire.webp";
import ref7 from "./SunBrown.png";
import ref8 from "./Watsons.png";



function Action() {
  return (
    <div className="cta-container" id="anasayfa">
      <div className="cta-upper-container">
        <div className="cta-upper-sub-container">
          <div className="cta-h1-text-container">
          <h1>Siz Hayal Edin</h1>
          <h1>Biz Üretelim</h1>
          </div>

          <div className="cta-p-text-container">
            <p>Pelin Kozmetik üretim yapmak isteyen zincir mağazalarınız için fason kozmetik üretimi ve dolum hizmetlerini üstlenir.</p>
          </div>

          <div className="cat-button"><a><button><p>Şimdi Başla</p></button></a></div>
          
        </div>
        
      </div>

      <div className="cta-bottom-container">
        <div className="award-sub-container1">
          <div className="award-container">
            <div className="award-img">
              <img src={ref1} alt="A101"></img>
            </div>
          </div>

          <div className="award-container">
            <div className="award-img">
              <img src={ref2} alt="English Home"></img>
            </div>
          </div>

          <div className="award-container">
            <div className="award-img">
              <img src={ref3} alt="Eve" id="eve"></img>
            </div>
          </div>

          <div className="award-container">
            <div className="award-img">
              <img src={ref4} alt="FDPlantix"></img>
            </div>
          </div>
        </div>

        <div className="award-sub-container2">
          <div className="award-container">
            <div className="award-img">
              <img src={ref5} alt="Jeunesse"></img>
            </div>
          </div>

          <div className="award-container">
            <div className="award-img">
              <img src={ref6} alt="Marie Clarie"></img>
            </div>
          </div>

          <div className="award-container">
            <div className="award-img">
              <img src={ref7} alt="Sun Brown"></img>
            </div>
          </div>

          <div className="award-container">
            <div className="award-img">
              <img src={ref8} alt="Watsons"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Action;
