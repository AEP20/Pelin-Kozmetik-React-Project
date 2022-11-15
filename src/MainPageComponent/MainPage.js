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
import ReactGA from "react-ga";
import UpperWave from "../UpperPartContainer/UpperWave";

function initialGA(){
  ReactGA.initialize('G-L4XV6MY7D6');
  ReactGA.pageview('https://aep20.github.io/Pelin-Kozmetik-React-Project/');
}

function MainPage() {
  initialGA();
  return (
    <div>

      <header class="video-header">
        <div className="contrast">
        <Action></Action>

        </div>
        
        <video className="video-tag" autoPlay loop muted>
          <source src={clip} type="video/mp4" />
        </video>
      </header>

      <div className="main">
        <UpperWave></UpperWave>
        <AboutUs></AboutUs>
        <Statistics></Statistics>
        <TrustUs></TrustUs>
        <BasicTabs></BasicTabs>
        <FAQ></FAQ>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MainPage;

/*

*/
