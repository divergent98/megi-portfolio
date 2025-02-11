import Navbar from "../../Components/Navbar";



import astronaut from "../../assets/astronaut.png";
import smallSphere from "../../assets/small-sphere.png";
import earth from "../../assets/earth.png";
import earthmobile from "../../assets/earth-mobile-01.png"
import verse1 from "../../assets/verse-1.png";
import verse2 from "../../assets/verse-2.png";
import verse3 from "../../assets/verse-3.png";
import verse4 from "../../assets/verse-4.png";
import verse5 from "../../assets/verse-5.png";
import verse6 from "../../assets/verse-6.png";
import verse7 from "../../assets/verse-7.png";
import verse8 from "../../assets/verse-8.png";
import verse9 from "../../assets/verse-9.png";
import verse10 from "../../assets/verse-10.png";
import planet from "../../assets/planet.png";


import ContactForm from "../Components/ContactForm";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from 'react-owl-carousel';

import SwiperCore from 'swiper';
import { useTranslation } from "react-i18next";


const Megiverse = () => {
 

  const slides = [
 //   { id: 1, image: `${verse1}`, title: "" },
    { id: 2, image: `${verse2}`, title: "" },
    { id: 3, image: `${verse3}`, title: "" },
    { id: 4, image: `${verse4}`, title: "" },
    { id: 5, image: `${verse5}`, title: "Soltitude, 2021" },
  //  { id: 6, image: `${verse6}`, title: "" },
    { id: 7, image: `${verse7}`, title: "Lake 2022" },
    { id: 8, image: `${verse8}`, title: "Universal music" },
   // { id: 9, image: `${verse9}`, title: "" },
    { id: 10, image: `${verse10}`, title: "Digital Chemistry" },
  ];
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    center: true,
    responsive: {
      0: {
        items: 1, // Show 1 slide on mobile
      },
      768: {
        items: 3, // Show 3 slides on tablets and larger screens
      },
    },
  };
  const { t } = useTranslation();
  return (
    <>
      <div className="container-fluid p-0 overflow-hidden night-sky-background">
      <Navbar logo="meggiverseLogo" color="text-white"/>
        <div className="my-5"></div>
        <div className="row megiverse-hero">
          <div className="maggiverse-hero">
            <h5>{t("megiverse.welcome")}</h5>
            <h1>MAGGIVERSE</h1>
          </div>
        </div>
        <div className="maggiverse-body">
          <div className="row align-items-lg-center">
            <div className="col-4 col-lg-6 ">
              <img src={earth} className="img-fluid d-none d-md-block" />
              <img src={earthmobile} className="img-fluid d-block d-md-none" />
            </div>
            <div className="col-8 col-lg-6 d-lg-flex">
              <p className="fs-25 mx-lg-5 me-2 mt-3 pe-lg-5 text-lg-end text-white">
              {t("megiverse.welcome_text")}
              </p>
            </div>
          </div>
          <div className="row planet-background align-items-lg-center">
            <div className="col-8">
              {" "}
              <p className="fs-25 mx-lg-5 custom-meggiverse-p pe-lg-5 text-start text-white">
              {t("megiverse.text_2")} <br></br><br></br>{t("megiverse.text_3")} 
              </p>
            </div>
          </div>
        </div>
        <div>
    
            <h1 className="maggiverse-h2">{t("megiverse.illustrations")}</h1>
<div className="row justify-content-center">
  <div className="col-10">
    <OwlCarousel className="owl-theme my-5" {...options}>
      {slides.map((slide) => (
        <div className="item" key={slide.id}>
          <div className="rounded-5 d-flex flex-column justify-content-center carousel-bg-color m">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="img-fluid text-center "
            />
          </div>
          <h1 className="mb-2 p-1 text-center text-white fs-25 fw-bold">
            {slide.title}
          </h1>
        </div>
      ))}
    </OwlCarousel>
  </div>
</div>

        </div>
        <ContactForm page="maggiverse" color="white" button="maggiverse-btn" customInput="meggiverse-input-field overflow-hidden"/>
      </div>
    </>
  );
};

export default Megiverse;
