import Navbar from "../../Components/Navbar";
import ArtvanturistaImg from "../../assets/Artvanturista.png";
import ArtvanturistaMobile from "../../assets/2222.jpg";
import leaf from "../../assets/leaf.png";
import artist from "../../assets/artist.png";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import four from "../../assets/4.png";
import five from "../../assets/5.png";
import six from "../../assets/6.png";
import seven from "../../assets/7.png";
import eight from "../../assets/8.png";
import nine from "../../assets/9.png";
import ten from "../../assets/10.png";
import eleven from "../../assets/11.png";
import twelve from "../../assets/12.png";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import ContactForm from "../Components/ContactForm";
import { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useTranslation } from "react-i18next";

const Artvanturista = () => {



  const carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
    },
  };

  const [isOpenOne, setIsOpenOne] = useState(false);
  const toggleModalOne = () => setIsOpenOne(!isOpenOne);

  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const toggleModalTwo = () => setIsOpenTwo(!isOpenTwo);

  const [isOpenThree, setIsOpenThree] = useState(false);
  const toggleModalThree = () => setIsOpenThree(!isOpenThree);

  const [isOpenFour, setIsOpenFour] = useState(false);
  const toggleModalFour = () => setIsOpenFour(!isOpenFour);

  const [isOpenFive, setIsOpenFive] = useState(false);
  const toggleModalFive = () => setIsOpenFive(!isOpenFive);

  const [isOpenSix, setIsOpenSix] = useState(false);
  const toggleModalSix = () => setIsOpenSix(!isOpenSix);

  const [isOpenSeven, setIsOpenSeven] = useState(false);
  const toggleModalSeven = () => setIsOpenSeven(!isOpenSeven);

  const [isOpenEight, setIsOpenEight] = useState(false);
  const toggleModalEight = () => setIsOpenEight(!isOpenEight);

  const [isOpenNine, setIsOpenNine] = useState(false);
  const toggleModalNine = () => setIsOpenNine(!isOpenNine);

  const [isOpenTen, setIsOpenTen] = useState(false);
  const toggleModalTen = () => setIsOpenTen(!isOpenTen);

  const [isOpenEleven, setIsOpenEleven] = useState(false);
  const toggleModalEleven = () => setIsOpenEleven(!isOpenEleven);

  const [isOpenTwelve, setIsOpenTwelve] = useState(false);
  const toggleModalTwelve = () => setIsOpenTwelve(!isOpenTwelve);

    const { t } = useTranslation();
  return (
    <>
      <div
        className="hero-section d-none d-lg-block"
        style={{
          backgroundImage: `url(${ArtvanturistaImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar logo="artvanturistaLogo" />
        <div className="container">
          <div className="row justify-content-end align-items-center">
            <div className="col-md-8 text-center">
              <h1 className="my-5 pt-5 fw-43 fw-bold">ARTVANTURISTA</h1>
              <p className="fs-28 fs-mb-14">
              {t("artvanturista.text")} 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hero-section d-block d-lg-none"
        style={{
          backgroundImage: `url(${ArtvanturistaMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar logo="artvanturistaLogo" />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="fw-43 fw-bold">ARTVANTURISTA</h1>
              <p className="fs-28">
              {t("artvanturista.text")}               </p>
            </div>
            <div className="spacer"></div>
            <div className="col-12">
              <h2 className=" fs-26 fw-bold text-end mb-5 me-4">
              {t("artvanturista.title_1")}  <br /> {t("artvanturista.title_2")} 
              </h2>

              <p className="fs-mb-18 text-end me-4">
              {t("artvanturista.text_2")} 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-none d-md-block ">
        <div className="row background-beidge align-items-center py-5">
          <div className="col-md-5">
            <img src={leaf} className="img-fluid" alt="leaf" />
          </div>
          <div className="col-md-6">
            <h2 className="my-5 fs-43 fw-bold">
            {t("artvanturista.title_1")}  <br /> {t("artvanturista.title_2")} 
            </h2>
            <p className="fs-28">
            {t("artvanturista.text_2")} 
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <div className="row background-gray justify-content-center align-items-center py-5">
          <div className="col-10 col-md-4 fs-28  fw-bold text-center order-2 order-md-1">
            <p>
            {t("artvanturista.text_3")} 
            </p>
          </div>
          <div className="col-10 col-md-5 order-1 order-md-2">
            <img src={artist} className="img-fluid" alt="artist" />
          </div>
        </div>
      </div>
      <div className="container-fluid  background-beidge py-5 d-none d-md-block">
        <div className="row justify-content-center">
          <div className="col-3">
            {" "}
            <img
              src={one}
              className="img-fluid"
              alt="one"
              onClick={toggleModalOne}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-3 p-5">
            <img
              src={two}
              className="img-fluid"
              alt="two"
              onClick={toggleModalTwo}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-3">
            <img
              src={three}
              className="img-fluid"
              alt="three"
              onClick={toggleModalThree}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-3 p-5">
            <img
              src={four}
              className="img-fluid"
              alt="four"
              onClick={toggleModalFour}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-3 custom-5">
            <img
              src={five}
              className="img-fluid"
              alt="five"
              onClick={toggleModalFive}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-3 custom-6">
            <img
              src={six}
              className="img-fluid"
              alt="six"
              onClick={toggleModalSix}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-3 custom-7">
            <img
              src={seven}
              className="img-fluid"
              alt="seven"
              onClick={toggleModalSeven}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-3 custom-8">
            <img
              src={eight}
              className="img-fluid"
              alt="eight"
              onClick={toggleModalEight}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-3 custom-9">
            <img
              src={nine}
              className="img-fluid"
              alt="nine"
              onClick={toggleModalNine}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2 custom-10">
            <img
              src={ten}
              className="img-fluid"
              alt="ten"
              onClick={toggleModalTen}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-4 custom-11">
            <img
              src={eleven}
              className="img-fluid"
              alt="eleven"
              onClick={toggleModalEleven}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-3 custom-12">
            <img
              src={twelve}
              className="img-fluid"
              alt="twelve"
              onClick={toggleModalTwelve}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <div className="d-block d-md-none my-5">
      <OwlCarousel className="owl-theme" {...carouselOptions}>
          <div>
            <img
              src={one}
              className="img-fluid"
              alt="one"
              onClick={toggleModalOne}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <img
              src={two}
              className="img-fluid"
              alt="two"
              onClick={toggleModalTwo}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <img
              src={three}
              className="img-fluid"
              alt="three"
              onClick={toggleModalThree}
              style={{ cursor: "pointer" }}
            />
          </div>
          {/* Add more items */}
        </OwlCarousel>
      </div>
      <ContactForm
        page="artvanturista"
        background="background-beidge"
        color="black"
        button="artvanturista-btn"
      />
      <div>
        <Modal isOpen={isOpenOne} toggle={toggleModalOne} centered>
          <ModalBody className="ps-4">
            <img
              src={one}
              className="img-fluid scale"
              width="100%"
              height="auto"
              alt="Full Image"
            />
          </ModalBody>
        </Modal>
        <Modal isOpen={isOpenTwo} toggle={toggleModalTwo} centered>
          <ModalBody className="ps-4">
            <img
              src={two}
              className="img-fluid scale"
              width="100%"
              height="auto"
              alt="Full Image"
            />
          </ModalBody>
        </Modal>
        <Modal isOpen={isOpenThree} toggle={toggleModalThree} centered>
          <ModalBody className="ps-4">
            <img
              src={three}
              className="img-fluid scale"
              width="100%"
              height="auto"
              alt="Full Image"
            />
          </ModalBody>
        </Modal>
        <Modal isOpen={isOpenFour} toggle={toggleModalFour} centered>
          <ModalBody className="ps-4">
            <img
              src={four}
              className="img-fluid scale"
              width="100%"
              height="auto"
              alt="Full Image"
            />
          </ModalBody>
        </Modal>
        <Modal isOpen={isOpenFive} toggle={toggleModalFive} centered>
          <ModalBody className="ps-4">
            <img
              src={five}
              className="img-fluid scale"
              width="100%"
              height="auto"
              alt="Full Image"
            />
          </ModalBody>
        </Modal>
        <Modal isOpen={isOpenSix} toggle={toggleModalSix} centered>
          <ModalBody className="ps-4">
            <img
              src={six}
              className="img-fluid scale"
              width="100%"
              height="auto"
              alt="Full Image"
            />
          </ModalBody>
        </Modal>

        <Modal isOpen={isOpenSeven} toggle={toggleModalSeven} centered>
          <ModalBody className="ps-4">
            <img
              src={seven}
              className="img-fluid scale"
              width="100%"
              height="auto"
              alt="Full Image"
            />
          </ModalBody>
        </Modal>

        <Modal isOpen={isOpenEight} toggle={toggleModalEight} centered>
          <ModalBody className="ps-4">
            <img
              src={eight}
              className="img-fluid scale"
              width="100%"
              height="auto"
              alt="Full Image"
            />
          </ModalBody>
        </Modal>

        <Modal isOpen={isOpenNine} toggle={toggleModalNine} centered>
          <ModalBody className="ps-4">
            <img
              src={nine}
              className="img-fluid scale"
              width="100%"
              height="auto"
              alt="Full Image"
            />
          </ModalBody>
        </Modal>

        <Modal isOpen={isOpenTen} toggle={toggleModalTen} centered>
          <ModalBody className="ps-4">
            <img
              src={ten}
              className="img-fluid scale-2"
              width="100%"
              height="auto"
              alt="Full Image"
            />
          </ModalBody>
        </Modal>

        <Modal isOpen={isOpenEleven} toggle={toggleModalEleven} centered>
          <ModalBody className="ps-4">
            <img
              src={eleven}
              className="img-fluid scale"
              width="100%"
              height="auto"
              alt="Full Image"
            />
          </ModalBody>
        </Modal>

        <Modal isOpen={isOpenTwelve} toggle={toggleModalTwelve} centered>
          <ModalBody className="ps-4">
            <img
              src={twelve}
              className="img-fluid scale"
              width="100%"
              height="auto"
              alt="Full Image"
            />
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default Artvanturista;
