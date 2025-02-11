import Navbar from "../../Components/Navbar";
import uxui from "../../assets/ux-ui-design.png";
import biteLogo from "../../assets/bite-logo.png";
import bite1 from "../../assets/bite-1-revised.png";
import bite2 from "../../assets/bite-mockups.png";

import megaLogo from "../../assets/mega-logo.png"
import mega from "../../assets/mega-promet.png"
import mega2 from "../../assets/mega-promet-2.png"
import portfolio from "../../assets/portfolio.png";
import ContactForm from "../Components/ContactForm";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import ParallaxComponent from "./ParallaxComponent";
import { useTranslation } from "react-i18next";

const Design = () => {
  const { t } = useTranslation();
  return (
    <>      
      <div className="hero-section overflow-hidden">
        <Navbar />
        <div className="container overflow-hidden">
          <div className="row align-items-center mb-5 justify-content-center">
            <h1 className="mt-lg-5 mb-5 fw-43 fs-64 fw-bold text-center">
            {t("ux_ui_design.title")}
            </h1>
            <div className="col-md-5 text-center text-md-start">
              <p className="fs-28">
              {t("ux_ui_design.text")}
              </p>
            </div>
            <div className="col-7 text-center">
              <img src={uxui} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid overflow-hidden">
        <div className="row">
          <div className="row justify-content-start ms-0 ps-0">
            <div className="col-8 ms-0 ps-0 my-5">
              <img src={portfolio} className="img-fluid ms-0 ps-0 my-5" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 ">
              <img src={biteLogo} className="img-fluid p-5" />
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <img src={bite1} className="img-fluid" />
            </div>
            <div className="col-lg-5">
              <p className="my-5 fs-25 text-end">
              {t("ux_ui_design.text_bite")}
              </p>
            </div>
          </div>
        </div>
      </div>  
      <div className="my-5 py-5">

      <ParallaxComponent image={bite2}/>

     </div>
     <div className="container">
      <div className="row justify-content-center">
            <div className="col-lg-3 ">
              <img src={megaLogo} className="img-fluid" />
            </div>
          </div>
     <div className="row justify-content-center align-items-center mb-5 pb-5">
            <div className="col-lg-6">
              <img src={mega2} className="img-fluid" />
            </div>
            <div className="col-lg-5">
              <p className="my-5 fs-25 text-end">
              {t("ux_ui_design.text_mega")} <br></br><br></br>{t("ux_ui_design.text_mega_2")} 
              </p>
            </div>
          </div>
    
     </div>
           <ParallaxComponent image={mega}/>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <p className="text-center fs-25">
              {t("ux_ui_design.text_2")} 
              </p>
            </div>
          </div>
      <ContactForm page="ux-ui" color="black" button="social-media-btn"/>
    </>
  );
};

export default Design;
