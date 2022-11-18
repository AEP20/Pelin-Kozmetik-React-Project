import React from "react";
import "./Mission.css";
import visionIcon from "./analytics-outline.svg";
import misionIcon from "./bulb-outline.svg";


function Mission() {
  return (
    <div className="mission-dom-container">
      <div className="mission-upper-container">
        <div className="vision-container">
          <div className="vision-icon-title-container">
            <div className="vision-icon-container">
              <img src={visionIcon} alt="vizyon" className="vision-icon"></img>
            </div>
            <div className="vision-title-container"><h1>Vizyonumuz</h1></div>
          </div>
          <div className="vision-text-container">
            <p>
              Vizyonumuz, kozmetik üretim alanındaki liderliğini sürdürerek
              ulusal ve uluslararası düzeyde tanınan bir firma olmaktır. Bu
              doğrultuda, teknolojinin ve bilimin yenilikçi bir bakış açısıyla
              yorumlanması ve uygulanması, çalışanlarımızın daha iyi eğitilmesi
              ve iş riskinin daha etkin yönetilmesi konularında en yüksek
              standartlar ve en iyi uygulama modeli olarak ‘‘Pelin Kozmetik
              Standartları’’nı oluşturmayı hedefliyoruz.
            </p>
          </div>
        </div>
        
        <div className="mission-container">
          <div className="mission-icon-title-container">
            <div className="mission-icon-container">
              <img src={misionIcon} alt="misyon" className="mission-icon"></img>
            </div>
            <div className="mission-title-container"><h1>Misyonumuz</h1></div>
          </div>
          <div className="mission-text-container">
            <p>
              Misyonumuz, çevresel sürdürülebilirliğin çalışanlarımız,
              müşterilerimiz, birlikte çalıştığımız ve içinde yaşadığımız toplum
              için önemini göz önünde bulundurarak; satış pazarlama ağını kurmuş
              girişimci profesyoneller, kurumsal firmalar ve market zincirler
              için güvenilir ve ekonomik bir fason kozmetik üretim tesisi
              olmaktır.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Mission;
