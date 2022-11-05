import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { height } from "@mui/system";
import "./Tabs.css";
import kozmetik1 from "./Kozmetik1.svg";
import kozmetik2 from "./Kozmetik2.svg";
import kozmetik3 from "./Kozmetik3.svg";
import kozmetik4 from "./Kozmetik4.svg";
import kozmetik5 from "./Kozmetik5.svg";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      disableRipple
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="tabs-container" id="ürünlerimiz">
      <Box sx={{}} className="tabs-button-container">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
          className="tabs-button-sub-container"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#D2001A",
              height: "100%",
              borderRadius: "50px",

              '@media screen and (max-width: 500px)': {
                borderRadius:"25px",
              }
            },
            "& .MuiTab-root": {
              color: "#000000",
              zIndex: "2",
              opacity: "1",
              textTransform: "none",
              transition: "ease-in-out 0.3s",
              fontSize:"14px",

              '@media screen and (max-width: 500px)': {
                padding:"3px 4px",
                fontSize:"12px"
              }
            },
            "& .Mui-selected": {
              color: "#FFFFFF",
              transition: "ease-in-out 0.3s",
            },
            "& .MuiBox-root": { padding: "0" },
          }}
        >
          <Tab label="Cilt Temizliği" {...a11yProps(0)} disableRipple />
          <Tab label="Yüz Bakımı" {...a11yProps(1)} disableRipple/>
          <Tab label="Vücut Bakımı" {...a11yProps(2)} disableRipple />
          <Tab label="Kitler" {...a11yProps(3)} disableRipple/>
          <Tab label="Saç Bakımı" {...a11yProps(4)} disableRipple />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className="tabpanel-dom-container" >
        <div className="tabpanel-container">
          <div className="tabpanel-left-container">
            <ul>
              <li>Yenileyici Scrub</li>
              <li>Temizleme Jeli</li>
              <li>Arındırıcı Köpük</li>
              <li>Peeling Jel</li>
              <li>Temizleme Sütü</li>
              <li>Misel Su</li>
              <li>Temizleme Yağı</li>
            </ul>
          </div>
          <div className="tabpanel-right-container">
            <img src={kozmetik1}></img>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} className="tabpanel-dom-container">
      <div className="tabpanel-container">
          <div className="tabpanel-left-container">
            <ul>
              <li>Nemlendirici Krem </li>
              <li>Akne Kremi</li>
              <li>Akne Jeli</li>
              <li>Kırışıklık Kremi</li>
              <li>Anti-Aging Krem</li>
              <li>Leke Kremi</li>
              <li>Beyazlatıcı Krem</li>
            </ul>
          </div>
          <div className="tabpanel-right-container">
            <img src={kozmetik2}></img>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} className="tabpanel-dom-container">
      <div className="tabpanel-container">
          <div className="tabpanel-left-container">
            <ul>
              <li>Nemlendiric Losyon</li>
              <li>Sıkılaştırıcı Losyon</li>
              <li>Vücut Yağı</li>
              <li>Işıltılı Yağ</li>
              <li>Body Splash</li>
              <li>Vucüt Peelingi</li>
              <li>El Peelingi</li>
            </ul>
          </div>
          <div className="tabpanel-right-container">
            <img src={kozmetik3}></img>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3} className="tabpanel-dom-container">
      <div className="tabpanel-container">
          <div className="tabpanel-left-container">
            <ul>
              <li>Başlangıç Seti</li>
              <li>Nemlendirici Kit</li>
              <li>Akneli Ciltler için Kit</li>
              <li>Beyazlatıcı Kit</li>
              <li>Anti-Aging Kit</li>
              <li>Fit Vücut Kiti</li>
              <li>Pürüzsüz Vücut Kiti</li>
            </ul>
          </div>
          <div className="tabpanel-right-container">
            <img src={kozmetik4}></img>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4} className="tabpanel-dom-container">
      <div className="tabpanel-container">
          <div className="tabpanel-left-container">
            <ul>
              <li>Şampuan</li>
              <li>Saç Kremi</li>
              <li>Saç Maskesi</li>
              <li>Temizleyici Krem</li>
              <li>Şekillendiriciler</li>
              <li>Fit Vücut Kiti</li>
              <li>Kuru Şampuan</li>
              <li>Saç Yağları</li>
            </ul>
          </div>
          <div className="tabpanel-right-container">
            <img src={kozmetik5}></img>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
