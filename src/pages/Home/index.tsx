import Navbar from "../../Components/Navbar";
import megi from "../../assets/megi.png";
import logoBlackBg from "../../assets/logo-mn-black-bg.png";
import arrowImage from "../../assets/arrow-image.png";
import home1 from "../../assets/home-1.png";
import home2 from "../../assets/home-2.png";
import home3 from "../../assets/home-3.png";
import home4 from "../../assets/home-4.png";

import brendiranje from "../../assets/brendiranje.png";
import brendiranje2 from "../../assets/brendiranje-2.png";
import dizajnLogotipa from "../../assets/dizajn-logotipa.png";
import dizajnCv from "../../assets/dizajn-cv.png";
import dizajnVizitKarti from "../../assets/dizajn-vizit-karti.png";
import dizajnZaStampu from "../../assets/dizajn-za-stampu.png";
import stampaNaPlatnu from "../../assets/stampa-na-platnu.png";
import higherView from "../../assets/higher-view.png";
import dizajnLogotipa2 from "../../assets/dizajn-logotipa-2.png";
import dizajnVizitKarti2 from "../../assets/dizajn-vizit-karti-2.png";
import stampaNaPlatnu2 from "../../assets/stampa-na-platnu-2.png";
import stampaNaSolji2 from "../../assets/stampa-na-solji-2.png";
import slikarstvo from "../../assets/slikarstvo.png";
import ContactForm from "../Components/ContactForm";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="hero-section"
        style={{
          backgroundColor: "#ffeefe",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="container">
          <div className="row align-items-center justify-content-center pt-5">
            <div className="col-md-5">
              <h1 className="my-5 pt-5 fs-52 fw-43 fw-bold">
                {t("hero.greeting")} <br /> <br></br>{" "}
                <span className="text-pink">Magdalena Nemoga</span>
              </h1>
              <p className="fs-32">{t("hero.welcome")}</p>
              <div className="d-flex flex-row mt-5">
                <button className="btn rounded-3 fs-25 py-2 px-4 fw-bold btn-pink text-white me-2">
                  {t("hero.talk")}
                </button>
                <button className="btn rounded-3 fs-25 py-2 px-4  fw-bold bg-white">
                  {t("hero.portfolio")}
                </button>
              </div>
              <div className="social-floating d-none d-lg-block">
                <div className="d-flex flex-column">
                  <span>
                    <svg
                      width="31"
                      height="29"
                      viewBox="0 0 31 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.11923 1.19043C4.28706 1.19043 1.23828 4.08883 1.23828 7.59519V21.4047C1.23828 24.9111 4.28706 27.8095 8.11923 27.8095H22.8811C26.7133 27.8095 29.7621 24.9111 29.7621 21.4047V7.59519C29.7621 4.08883 26.7133 1.19043 22.8811 1.19043H8.11923ZM0.238281 7.59519C0.238281 3.47477 3.79864 0.19043 8.11923 0.19043H22.8811C27.2017 0.19043 30.7621 3.47477 30.7621 7.59519V21.4047C30.7621 25.5251 27.2017 28.8095 22.8811 28.8095H8.11923C3.79864 28.8095 0.238281 25.5251 0.238281 21.4047V7.59519ZM16.3615 9.47114C15.2297 9.31415 14.075 9.49537 13.0628 9.9867C12.0509 10.4779 11.2366 11.252 10.73 12.1934C10.2238 13.1342 10.0489 14.1972 10.227 15.2328C10.4052 16.2686 10.9289 17.231 11.7303 17.9807C12.5322 18.7309 13.5709 19.2292 14.7004 19.3992C15.8299 19.5692 16.987 19.4013 18.0058 18.9216C19.0243 18.4421 19.849 17.6773 20.368 16.7415C20.8867 15.8064 21.0756 14.7454 20.9111 13.708C20.7433 12.6495 20.2153 11.6639 19.3978 10.8992C18.5798 10.134 17.5159 9.63128 16.3615 9.47114ZM12.6262 9.08708C13.8188 8.50817 15.1735 8.29677 16.4989 8.48063C17.8508 8.66817 19.1073 9.25805 20.0809 10.1689C21.0551 11.0802 21.6949 12.2653 21.8988 13.5514C22.0987 14.8126 21.8679 16.0991 21.2425 17.2266C20.6175 18.3534 19.632 19.2612 18.4318 19.8264C17.2318 20.3914 15.8744 20.5872 14.5515 20.388C13.2285 20.1889 12.0017 19.604 11.0472 18.711C10.0922 17.8176 9.45796 16.6606 9.24152 15.4023C9.02502 14.1436 9.23881 12.8544 9.8494 11.7196C10.4596 10.5854 11.4332 9.66613 12.6262 9.08708ZM23.6192 6.40472C23.3431 6.40472 23.1192 6.62857 23.1192 6.90472C23.1192 7.18086 23.3431 7.40472 23.6192 7.40472H23.6333C23.9095 7.40472 24.1333 7.18086 24.1333 6.90472C24.1333 6.62857 23.9095 6.40472 23.6333 6.40472H23.6192Z"
                        fill="black"
                      />
                    </svg>
                  </span>{" "}
                  <span className="mt-3">
                    <svg
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.23828 3.75C1.23828 2.36172 2.34376 1.25 3.69066 1.25C5.03756 1.25 6.14304 2.36172 6.14304 3.75C6.14304 5.13828 5.03756 6.25 3.69066 6.25C2.34376 6.25 1.23828 5.13828 1.23828 3.75ZM3.69066 0.25C1.77645 0.25 0.238281 1.82458 0.238281 3.75C0.238281 5.67542 1.77645 7.25 3.69066 7.25C5.60487 7.25 7.14304 5.67542 7.14304 3.75C7.14304 1.82458 5.60487 0.25 3.69066 0.25ZM21.4049 10.25C19.1911 10.25 17.0663 11.1436 15.4984 12.7368C13.9302 14.3302 13.0478 16.4931 13.0478 18.75V28.75H17.9526V18.75C17.9526 17.8243 18.3144 16.9349 18.9609 16.278C19.6077 15.6207 20.4867 15.25 21.4049 15.25C22.3232 15.25 23.2022 15.6207 23.849 16.278C24.4955 16.9349 24.8573 17.8243 24.8573 18.75V28.75H29.7621V18.75C29.7621 16.4931 28.8797 14.3302 27.3115 12.7368C25.7436 11.1436 23.6188 10.25 21.4049 10.25ZM21.4049 9.25C18.9207 9.25 16.5398 10.2529 14.7856 12.0353C13.0317 13.8175 12.0478 16.233 12.0478 18.75V29.25C12.0478 29.5261 12.2717 29.75 12.5478 29.75H18.4526C18.7287 29.75 18.9526 29.5261 18.9526 29.25V18.75C18.9526 18.0844 19.2129 17.4476 19.6737 16.9794C20.1342 16.5114 20.7571 16.25 21.4049 16.25C22.0528 16.25 22.6757 16.5114 23.1362 16.9794C23.597 17.4476 23.8573 18.0844 23.8573 18.75V29.25C23.8573 29.5261 24.0812 29.75 24.3573 29.75H30.2621C30.5382 29.75 30.7621 29.5261 30.7621 29.25V18.75C30.7621 16.233 29.7782 13.8175 28.0243 12.0353C26.2701 10.2529 23.8892 9.25 21.4049 9.25ZM0.238281 11.25C0.238281 10.9739 0.462139 10.75 0.738281 10.75H6.64304C6.91919 10.75 7.14304 10.9739 7.14304 11.25V29.25C7.14304 29.5261 6.91919 29.75 6.64304 29.75H0.738281C0.462139 29.75 0.238281 29.5261 0.238281 29.25V11.25ZM1.23828 11.75V28.75H6.14304V11.75H1.23828Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 ps-5 mt-3 d-none d-lg-block">
              <img
                src={megi}
                className="img-fluid img-position mt-5"
                alt="Graphic Design"
              />
            </div>
            <div className="col-md-6 ps-5 mt-3 d-lg-none">
              <img src={megi} className="img-fluid mt-5" alt="Graphic Design" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${logoBlackBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="row justify-content-center py-5">
          <div className="col-10 py-5">
            <h2 className="text-center fs-64 text-white my-5">
              {t("about.title")}
            </h2>
            <p className="text-center fs-32 text-white">{t("about.text")}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="text-center my-5 fw-bold fs-47">
              {t("services.title")}
            </h2>
            <p className="text-center fs-28 mb-5">
              {t("services.description")}
            </p>
          </div>
          <div className="col-11 col-lg-3">
            <img src={home1} className="img-fluid sm-50" />{" "}
            <h5 className="fw-bold text-center">
              {t("services.art.title")} <br></br> <br></br>
            </h5>{" "}
            <p className="text-center">{t("services.art.description")}</p>
          </div>
          <div className="col-11 col-lg-3">
            <img src={home2} className="img-fluid sm-50" />{" "}
            <h5 className="fw-bold text-center">
              {t("services.graphic_design.title")} <br></br> <br></br>
            </h5>{" "}
            <p className="text-center">
              {t("services.graphic_design.description")}
            </p>
          </div>
          <div className="col-11 col-lg-3">
            <img src={home3} className="img-fluid  sm-50" />{" "}
            <h5 className="fw-bold text-center">
              {t("services.social_media.title")}
              <br></br> <br></br>
            </h5>{" "}
            <p className="text-center">
              {t("services.social_media.description")}
            </p>
          </div>
          <div className="col-11 col-lg-3">
            <img src={home4} className="img-fluid sm-50" />{" "}
            <h5 className="fw-bold text-center">
              {t("services.ui_ux.title")}
              <br></br> <br></br>
            </h5>{" "}
            <p className="text-center">{t("services.ui_ux.description")}</p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="my-5 fw-bold fs-47 text-center">
              {t("portfolio.title")}
            </h2>
          </div>
          <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-11">
                <div className="row text-center g-5">
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 rounded-0">
                      <img
                        src={brendiranje} // Replace with your image path
                        alt="Branding"
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body px-0 d-flex flex-row justify-content-between">
                        <div className="">
                          <h5 className="card-title text-start fw-bold">
                            {t("portfolio.branding")}
                          </h5>
                          <p className="card-text text-start text-muted">
                            Grafički Dizajn
                          </p>
                        </div>{" "}
                        <div>
                          <img
                            src={arrowImage}
                            alt="Arrow"
                            className="arrow-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 rounded-0">
                      <img
                        src={dizajnLogotipa} // Replace with your image path
                        alt="Branding"
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body px-0 d-flex flex-row justify-content-between">
                        <div className="">
                          <h5 className="card-title text-start fw-bold">
                            {t("portfolio.logo_design")}
                          </h5>
                          <p className="card-text text-start text-muted">
                            Grafički Dizajn
                          </p>
                        </div>
                        <div>
                          <img
                            src={arrowImage}
                            alt="Arrow"
                            className="arrow-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 rounded-0">
                      <img
                        src={dizajnCv} // Replace with your image path
                        alt="Branding"
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body px-0 d-flex flex-row justify-content-between">
                        <div className="">
                          <h5 className="card-title text-start fw-bold">
                            {t("portfolio.cv_design")}
                          </h5>
                          <p className="card-text text-start text-muted">
                            Grafički Dizajn
                          </p>
                        </div>{" "}
                        <div>
                          <img
                            src={arrowImage}
                            alt="Arrow"
                            className="arrow-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row text-center g-5">
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 rounded-0">
                      <img
                        src={dizajnZaStampu} // Replace with your image path
                        alt="Branding"
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body px-0 d-flex flex-row justify-content-between">
                        <div className="">
                          <h5 className="card-title text-start fw-bold">
                            {t("portfolio.print_design")}
                          </h5>
                          <p className="card-text text-start text-muted">
                            Meggiverse
                          </p>
                        </div>{" "}
                        <div>
                          <img
                            src={arrowImage}
                            alt="Arrow"
                            className="arrow-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 rounded-0">
                      <img
                        src={stampaNaPlatnu} // Replace with your image path
                        alt="Branding"
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body px-0 d-flex flex-row justify-content-between">
                        <div className="">
                          <h5 className="card-title text-start fw-bold">
                            {t("portfolio.canvas_print")}
                          </h5>
                          <p className="card-text text-start text-muted">
                            Meggiverse
                          </p>
                        </div>{" "}
                        <div>
                          <img
                            src={arrowImage}
                            alt="Arrow"
                            className="arrow-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 rounded-0">
                      <img
                        src={higherView} // Replace with your image path
                        alt="Branding"
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body px-0 d-flex flex-row justify-content-between">
                        <div className="">
                          <h5 className="card-title text-start fw-bold">
                            Higher View
                          </h5>
                          <p className="card-text text-start text-muted">
                            Maggiverse
                          </p>
                        </div>{" "}
                        <div>
                          <img
                            src={arrowImage}
                            alt="Arrow"
                            className="arrow-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row text-center g-5">
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 rounded-0">
                      <img
                        src={dizajnVizitKarti} // Replace with your image path
                        alt="Branding"
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body px-0 d-flex flex-row justify-content-between">
                        <div className="">
                          <h5 className="card-title text-start fw-bold">
                            {t("portfolio.visit_card")}
                          </h5>
                          <p className="card-text text-start text-muted">
                          {t("graphic_design.title")}
                          </p>
                        </div>{" "}
                        <div>
                          <img
                            src={arrowImage}
                            alt="Arrow"
                            className="arrow-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 rounded-0">
                      <img
                        src={dizajnLogotipa2} // Replace with your image path
                        alt="Branding"
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body px-0 d-flex flex-row justify-content-between">
                        <div className="">
                          <h5 className="card-title text-start fw-bold">
                            {t("portfolio.logo_design")}
                          </h5>
                          <p className="card-text text-start text-muted">
                          {t("graphic_design.title")}
                          </p>
                        </div>{" "}
                        <div>
                          <img
                            src={arrowImage}
                            alt="Arrow"
                            className="arrow-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 rounded-0">
                      <img
                        src={brendiranje2} // Replace with your image path
                        alt="Branding"
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body px-0 d-flex flex-row justify-content-between">
                        <div className="">
                          <h5 className="card-title text-start fw-bold">
                            {t("portfolio.branding")}
                          </h5>
                          <p className="card-text text-start text-muted">
                          {t("graphic_design.title")}
                          </p>
                        </div>{" "}
                        <div>
                          <img
                            src={arrowImage}
                            alt="Arrow"
                            className="arrow-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row text-center g-5">
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 rounded-0">
                      <img
                        src={stampaNaPlatnu} // Replace with your image path
                        alt="Branding"
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body px-0 d-flex flex-row justify-content-between">
                        <div className="">
                          <h5 className="card-title text-start fw-bold">
                            {t("portfolio.canvas_print")}
                          </h5>
                          <p className="card-text text-start text-muted">
                          {t("graphic_design.title")}
                          </p>
                        </div>{" "}
                        <div>
                          <img
                            src={arrowImage}
                            alt="Arrow"
                            className="arrow-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 rounded-0">
                      <img
                        src={stampaNaSolji2} // Replace with your image path
                        alt="Branding"
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body px-0 d-flex flex-row justify-content-between">
                        <div className="">
                          <h5 className="card-title text-start fw-bold">
                            {t("portfolio.mug_print")}
                          </h5>
                          <p className="card-text text-start text-muted">
                          {t("graphic_design.title")}
                          </p>
                        </div>
                        <div>
                          <img
                            src={arrowImage}
                            alt="Arrow"
                            className="arrow-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card border-0 rounded-0">
                      <img
                        src={slikarstvo} // Replace with your image path
                        alt="Branding"
                        className="card-img-top rounded-0"
                      />
                      <div className="card-body px-0 d-flex flex-row justify-content-between">
                        <div className="">
                          <h5 className="card-title text-start fw-bold">
                            {t("portfolio.painting")}
                          </h5>
                          <p className="card-text text-start text-muted">
                            Artvanturista
                          </p>
                        </div>{" "}
                        <div>
                          <img
                            src={arrowImage}
                            alt="Arrow"
                            className="arrow-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm
        page="home"
        background="background-black"
        color="white"
        button="maggiverse-btn"
        customInput="meggiverse-input-field"
      />
    </>
  );
};

export default Home;
