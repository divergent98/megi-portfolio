import Navbar from "../../Components/Navbar";
import SocialMedia from "../../assets/social-media-02.png";
import SocialMediaMobile from "../../assets/social-media-03-01.png"
import cvet from "../../assets/cvece-2.png";
import proces1 from "../../assets/process-1.png";
import proces2 from "../../assets/process-2.png";
import proces3 from "../../assets/process-3.png";
import cmmLogo from "../../assets/cmm-logo.png";
import codeartLogo from "../../assets/codeart-logo.png";
import cmmInsta from "../../assets/cmm-insta.png";
import cmmInsta2 from "../../assets/cmm-insta-2.png";
import codeartInsta from "../../assets/codeart-insta.png";
import codeartInstaShop from "../../assets/codeart-insta-shop.png";
import logo1 from "../../assets/Arvena-MC-logo.png";
import logo2 from "../../assets/The-Social-Formula-2.png";
import logo3 from "../../assets/football-logo.png";
import instagramLogo from "../../assets/instagram-logo.png";
import linkedinLogo from "../../assets/linkedin-logo.png";

import ContactForm from "../Components/ContactForm";
import { useTranslation } from "react-i18next";

const Social = () => {

    const { t } = useTranslation();
    
  return (
    <>
      <div
        className="hero-section d-none d-md-block"
        style={{
          backgroundImage: `url(${SocialMedia})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 ">
              <h1 className="my-5 pt-5 fw-52 ">
              {t("social_media.title_1")}<br></br> {t("social_media.title_1_2")}
              </h1>
              <p className="fs-28">
              {t("social_media.text_1")}
              </p>
              <img src={cvet} className="cvet" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="hero-section d-block d-md-none"
        style={{
          backgroundImage: `url(${SocialMediaMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 ">
              <h1 className="mt-lg-5 mb-5 text-center pt-lg-5 fw-52 ">
              {t("social_media.title_1")}<br></br> {t("social_media.title_1_2")}
              </h1>
              <p className="fs-28 text-center">
              {t("social_media.text_1")}
              </p>
              <img src={cvet} className="cvet" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid background-mint pt-3 pb-5">
        <h2 className="my-5 py-5 fs-43 fw-bold text-center">
        {t("social_media.title_2")}
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-4 d-flex flex-column align-items-center text-center">
            <img
              src={proces3}
              className="mb-3 img-fluid"
              style={{ height: "100px", width: "100px" }}
              alt="Istraživanje"
            />
            <h5>{t("social_media.research")}</h5>
            <p className="mx-3">
            {t("social_media.research_text")}
            </p>
          </div>
          <div className="col-lg-4 d-flex flex-column align-items-center text-center">
            <img
              src={proces2}
              className="mb-3 img-fluid"
              style={{ height: "100px", width: "100px" }}
              alt="Strategija"
            />
            <h5>{t("social_media.strategy")}</h5>
            <p className="mx-3">
            {t("social_media.strategy_text")}
            </p>
          </div>
          <div className="col-lg-4 d-flex flex-column align-items-center text-center">
            <img
              src={proces1}
              className="mb-3 img-fluid"
              style={{ height: "100px", width: "100px" }}
              alt="Kreiranje Sadržaja"
            />
            <h5>{t("social_media.content_creation")}</h5>
            <p className="mx-3">
            {t("social_media.content_creation_text")}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="my-5 py-5 fs-43 fw-bold text-center">
        {t("social_media.title_3")}
        </h2>
        <div className="row align-items-center">
          <div className="col-lg-4 ">
            <img src={cmmLogo} className="img-fluid" />
            <p className="ps-3 pe-0 mt-5">
            {t("social_media.text_3_1")}
              <br></br>
              <br></br>
              {t("social_media.text_3_2")}
            </p>
          </div>

          <div className="col-lg-8">
            <img src={cmmInsta} className="img-fluid" />
          </div>
        </div>
        <div className="row  align-items-center">
          <div className="col-lg-8">
            <img src={cmmInsta2} className="img-fluid" />
          </div>
          <div className="col-lg-4">
            <div>
              <div className="col-md-6 text-center d-flex flex-column align-items-bottom">
                <p className="fw-bold mb-3" >
                {t("social_media.follow_1")}
                  <br /> {t("social_media.follow_2")}
                </p>
                <div>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    className="me-3"
                  >
                    <img src={instagramLogo} alt="Instagram" />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank">
                    <img src={linkedinLogo} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
    
    
          </div>
        </div>
        <div className="row  align-items-center">
          <div className="col-lg-4">
            <img src={codeartLogo} className="img-fluid" />
            <p className="ps-3 pe-0 mt-5">
            {t("social_media.text_4_1")}
              <br></br>
              <br></br>
              {t("social_media.text_4_2")}
            </p>
            <div>
              <div className="col-md-6 text-start ms-3 d-flex flex-column align-items-bottom">
                <p className="fw-bold mb-3" >
                {t("social_media.follow_1")}
                <br /> {t("social_media.follow_2")}
                </p>
                <div>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    className="me-3"
                  >
                    <img src={instagramLogo} alt="Instagram" />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank">
                    <img src={linkedinLogo} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 ">
            <img src={codeartInsta} className="img-fluid" />
          </div>
        </div>
        <div className="row  align-items-center">
          <div className="col-lg-8">
            <img src={codeartInstaShop} className="img-fluid" />
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-end ">
            <img src={codeartLogo} className="img-fluid text-end mt-5 mt-md-0" />
            <h4 className="text-end">SHOP</h4>
            <p className="ps-3 pe-0 mt-5 text-end">
            {t("social_media.follow_1")}
                  <br /> {t("social_media.text_5_1")}
            </p>
            <div className="row justify-content-end">
              <div className="col-md-6 text-end">
                <p className="fw-bold mb-3  d-flex flex-column justify-content-end" >
                {t("social_media.follow_1")}
                <br /> {t("social_media.follow_2")}
                </p>
                <div>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    className="me-3"
                  >
                    <img src={instagramLogo} alt="Instagram" />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank">
                    <img src={linkedinLogo} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-lg-10">
            <div className="row justify-content-lg-center align-items-lg-center">
              <div className="col-3">
                <img src={logo1} className="img-fluid" />
              </div>
              <div className="col-3">
                <img src={logo2} className="img-fluid" />
              </div>
              <div className="col-3">
                <img src={logo3} className="img-fluid" />
              </div>
              <div className="col-3">
                <p className="fs-28 fw-bold">{t("social_media.more")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 text-center">
            <p className="fs-25">
            {t("social_media.text_6")}
            </p>
          </div>
        </div>
      </div>
      <ContactForm
        page="social-media"
        background="background-white"
        color="black"
        button="social-media-btn"
      />
    </>
  );
};

export default Social;
