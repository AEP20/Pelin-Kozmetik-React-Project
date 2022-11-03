import React from "react";
import "./MainPage.scss";
import clip from "./BackgroundVideo.mp4";
import "./MainPageUpper.css";
import "./MainPageBottom.css";
import AboutUs from "../AboutUsComponent/AboutUs";
import Statistics from "../StatisticsComponent/Statistics";
import Mission from "../MissionComponent/Mission";
import TrustUs from "../TrustUsComponent/TrustUs.js";
import FAQ from "../FAQComponent/FAQ";
import Footer from "../FooterComponent/Footer";
import ContactForm from "../ContactFormComponent/ContactForm";
import BasicTabs from "../TabsComponent/Tabs";
import Action from "../ActionComponent/Action";

function MainPage() {
  return (
    <div>
      <header class="video-header">
        <video className="video-tag" autoPlay loop muted>
          <source src={clip} type="video/mp4" />
        </video>
        <div class="viewport-header">
          <div className="upper-main-container">
            <div className="upper-sub-container"></div>
          </div>

          <div className="bottom-main-container">
            <div className="bottom-award-container">
              <div className="award-sub-container1">
                <div className="award-container">
                  <div className="award-img">
                    <img src="./referans/A101.png"></img>
                  </div>
                </div>

                <div className="award-container">
                  <div className="award-img">
                    <img src="./referans/EnglishHome.png"></img>
                  </div>
                </div>

                <div className="award-container">
                  <div className="award-img">
                    <img src="./referans/Eve.png"></img>
                  </div>
                </div>

                <div className="award-container">
                  <div className="award-img">
                    <img src="./referans/FDPlantix.png"></img>
                  </div>
                </div>
              </div>
              <div className="award-sub-container2">
                <div className="award-container">
                  <div className="award-img">
                    <img src="./referans/Jeunesse.png"></img>
                  </div>
                </div>

                <div className="award-container">
                  <div className="award-img">
                    <img src="./referans/marieClaire.webp"></img>
                  </div>
                </div>

                <div className="award-container">
                  <div className="award-img">
                    <img src="./referans/SunBrown.png"></img>
                  </div>
                </div>

                <div className="award-container">
                  <div className="award-img">
                    <img src="./referans/Watsons.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Action></Action>
        <AboutUs></AboutUs>
        <Statistics></Statistics>
        <Mission></Mission>
        <TrustUs></TrustUs>
        <BasicTabs></BasicTabs>
        <FAQ></FAQ>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default MainPage;
